const express = require("express")
const router = express.Router()

const {quizCompleted,markTopicCompleted,markModuleCompleted} = require("../controllers/Module")

router.post("/completeQuiz",quizCompleted);
router.post("/completeTopic",markTopicCompleted);
router.post("/completeModule",markModuleCompleted);

module.exports = router