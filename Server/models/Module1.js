const mongoose = require('mongoose');

const Module1Schema = new mongoose.Schema({
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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quiz",
        }
    },
    topic2: {
        completed: {
            type: Boolean,
            default: false,
        },
        quiz: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quiz",
        }
    },
    topic3: {
        completed: {
            type: Boolean,
            default: false,
        },
        quiz: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quiz",
        }
    },
    topic4: {
        completed: {
            type: Boolean,
            default: false,
        },
        quiz: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quiz",
        }
    },
});

module.exports = mongoose.model("Module1", Module1Schema);
