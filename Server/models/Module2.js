const mongoose = require('mongoose');

const Module2Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    moduleCompleted: {
        type: Boolean,
        default: false,
    },
    topic1: {
        completed: {
            type: Boolean,
            default: false,
        },
        quiz: {
            quizCompleted:{
                type: 'boolean',
                default: false
            },
            completedQuestions:[
                {
                    type:String,
                }
            ]
        }
    },
    topic2: {
        completed: {
            type: Boolean,
            default: false,
        },
        quiz: {
            quizCompleted:{
                type: 'boolean',
                default: false
            },
            completedQuestions:[
                {
                    type:String,
                }
            ]
        }
    },  
});

module.exports = mongoose.model("Module2", Module2Schema);
