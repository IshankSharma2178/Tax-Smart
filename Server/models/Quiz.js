const mongoose = require('mongoose');

const QuizSchema= new mongoose.Schema({
    quizCompleted:{
        type: 'boolean',
        default: false
    },
    completedQuestions:[
        {
            type:Number,
        }
    ]

})

module.exports=mongoose.model("Quiz",QuizSchema);