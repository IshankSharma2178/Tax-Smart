const Module1 = require("../models/Module1");
const Module2 = require("../models/Module2");
const Module3 = require("../models/Module3");
const Module4 = require("../models/Module4");
const Quiz = require("../models/Quiz");

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


exports.quizCompleted = async (req, res) => {
    try {
      const { module, email, topic, completedQuestions } = req.body;
  
      // Get the correct module model based on the provided module name
      const ModuleModel = getModuleModel(module);
  
      // Fetch the module data based on email
      const moduleData = await ModuleModel.findOne({ email });
      
      // Check if the module data was found
      if (!moduleData) {
        return res.status(404).json({
          success: false,
          message: 'Module or quiz not found for the given email',
        });
      }
  
      // Check if the quiz field exists within the topic
      if (!moduleData[topic] || !moduleData[topic].quiz) {
        return res.status(404).json({
          success: false,
          message: `Quiz not found for the specified topic: ${topic}`,
        });
      }
  
      // Retrieve the quiz ID from the topic
      const quizId = moduleData[topic].quiz;
  
      // Log for debugging
      console.log('Quiz ID:', quizId);
  
      // Update the quiz based on the quiz ID
      const quizUpdate = await Quiz.findByIdAndUpdate(
        quizId,
        {
          quizCompleted: true,
          completedQuestions: completedQuestions || [], // Default to an empty array if not provided
        },
        { new: true }
      );
  
      // Check if the quiz update was successful
      if (!quizUpdate) {
        return res.status(404).json({
          success: false,
          message: 'Quiz not found',
        });
      }
  
      // Return the updated quiz data
      return res.status(200).json({
        success: true,
        result: quizUpdate,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };