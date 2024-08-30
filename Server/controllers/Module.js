const Module1 = require("../models/Module1");
const Module2 = require("../models/Module2");
const Module3 = require("../models/Module3");
const Module4 = require("../models/Module4");
const Module5 = require("../models/Module5");
const Modules = require("../models/Modules");
const Quiz = require("../models/Quiz");
const User = require("../models/User");

const getModuleModel = (moduleName) => {
    switch (moduleName) {
        case "module1": return Module1;
        case "module2": return Module2;
        case "module3": return Module3;
        case "module4": return Module4;
        default: throw new Error('Invalid module name');
    }
};

exports.markModuleCompleted = async (req, res) => {
    try {
        const { module, email } = req.body;
        const ModuleModel = getModuleModel(module);

        const result = await ModuleModel.findOneAndUpdate(
            { email },
            { moduleCompleted: true },
            { new: true }
        );

        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'Module not found for the given email',
            });
        }

        return res.status(200).json({
            success: true,
            result: result,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.markTopicCompleted = async (req, res) => {
    try {
        const { module, email, topic } = req.body;
        const ModuleModel = getModuleModel(module);

        const topicField = `${topic}.completed`;

        const result = await ModuleModel.findOneAndUpdate(
            { email },
            { [topicField]: true },
            { new: true }
        );

        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'Module or topic not found for the given email',
            });
        }

        return res.status(200).json({
            success: true,
            result: result,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.markQuizCompleted = async (req, res) => {
  try {
    const { module, email, topic } = req.body; // Extract module, email, and topic from request

    // Validate input
    if (!module || !email || !topic) {
      return res.status(400).json({ success: false, message: "Module, email, and topic are required." });
    }

    // Get the correct module model using the helper function
    const ModuleModel = getModuleModel(module);

    // Fetch module schema paths to validate topic dynamically
    const schemaPaths = ModuleModel.schema.paths;
    const topicPath = `${topic}.quiz.quizCompleted`;

    // Check if the topic exists within the module schema
    if (!schemaPaths[`${topic}.quiz.quizCompleted`]) {
      return res.status(400).json({ success: false, message: "Invalid topic provided for the selected module." });
    }

    // Find and update the document to mark the quiz as completed
    const updatedModule = await ModuleModel.findOneAndUpdate(
      { email },
      { $set: { [topicPath]: true } },
      { new: true }
    );

    // Handle case where no document is found
    if (!updatedModule) {
      return res.status(404).json({
        success: false,
        message: "Module or topic not found for the given email.",
      });
    }

    // Successful response
    return res.status(200).json({
      success: true,
      message: "Quiz marked as completed successfully.",
      result: updatedModule,
    });

  } catch (error) {
    // Error handling
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

exports.setCompletedQuestions = async (req, res) => {
  try {
    const { module, email, topic, completedQuestions } = req.body;

    console.log( module, email, topic, completedQuestions );

    if (!module || !email || !topic || !Array.isArray(completedQuestions)) {
      return res.status(400).json({ success: false, message: "Module, email, topic, and an array of completed questions are required." });
    }

    const ModuleModel = getModuleModel(module);

    console.log(ModuleModel);

    const schemaPaths = ModuleModel.schema.paths;
    const questionsField = `${topic}.quiz.completedQuestions`;

    if (!schemaPaths[questionsField]) {
      return res.status(400).json({ success: false, message: "Invalid topic or quiz structure provided for the selected module." });
    }

    const updatedModule = await ModuleModel.findOneAndUpdate(
      { email },
      { $set: { [questionsField]: completedQuestions } },
      { new: true }
    );

    if (!updatedModule) {
      return res.status(404).json({
        success: false,
        message: "Module or topic not found for the given email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Completed questions updated successfully.",
      result: updatedModule,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

exports.getUncompletedModule = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    // Query individual modules by email
    const module1Data = await Module1.findOne({ email }).exec();
    const module2Data = await Module2.findOne({ email }).exec();
    const module3Data = await Module3.findOne({ email }).exec();
    const module4Data = await Module4.findOne({ email }).exec();
    const module5Data = await Module5.findOne({ email }).exec();
    // Add queries for Module3, Module4, Module5 as needed

    const modulesData = [
      { name: 'Module1', data: module1Data },
      { name: 'Module2', data: module2Data },
      { name: 'Module3', data: module3Data },
      { name: 'Module4', data: module4Data },
      { name: 'Module5', data: module5Data },
      // Add other modules as needed
    ];

    for (const module of modulesData) {
      const { name, data } = module;
      if (data) {
        const uncompletedTopics = [];
        for (const [key, topic] of Object.entries(data.toObject())) {
          if (key.startsWith('topic') && !topic.completed) {
            uncompletedTopics.push(key);
          }
        }
        if (uncompletedTopics.length > 0) {
          return res.status(200).json({
            success: true,
            module: name,
            uncompletedTopics,
          });
        }
      }
    }

    return res.status(404).json({
      success: false,
      message: "No uncompleted modules found.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

exports.getCompletedQuestions = async (req, res) => {
  try {
    const { email, module, topic } = req.body;

    // Validate request data
    if (!email || !module || !topic) {
      return res.status(400).json({
        success: false,
        message: 'Email, module, and topic are required.',
      });
    }

    // Get the correct module model
    const ModuleModel = getModuleModel(module);

    // Find the module data for the given email
    const moduleData = await ModuleModel.findOne({ email }).exec();

    if (!moduleData) {
      return res.status(404).json({
        success: false,
        message: `No data found for module ${module} with the provided email.`,
      });
    }

    // Retrieve the specific topic data and completed questions
    const topicData = moduleData[topic];

    if (!topicData) {
      return res.status(404).json({
        success: false,
        message: `Topic ${topic} not found in module ${module}.`,
      });
    }

    const completedQuestions = topicData.quiz.completedQuestions || [];

    return res.status(200).json({
      success: true,
      module,
      topic,
      completedQuestions,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

exports.updateCoins = async(req,res) =>{
  try{
    const {email , questions} = req.body;

    const user =await  User.findOne({ email: email})

    user.coins =user.coins + questions*10;

    await user.save();

    return res.status(200).json({
      success: true,
      coins:user.coins
    })

  }catch(e){
    return res.status(500).json({
      success: false,
      message:e.message
    })
  }
}

exports.getCoins = async(req,res) => {
  try{
    const {email}=req.body;
    
    const user = await User.findOne({email:email});

    console.log(user)

    return res.status(200).json({
      success: true,
      coins: user.coins
    })
  }catch(err){
    return res.status(500).json({
      success: false,
      message: err.message,
    })
  }
}