const express = require("express")
const router = express.Router()

const {markQuizCompleted,markTopicCompleted,markModuleCompleted,getCoins,setCompletedQuestions,getUncompletedModule,updateCoins,getCompletedQuestions} = require("../controllers/Module")

router.post("/completedQuiz",markQuizCompleted);
router.post("/completeTopic",markTopicCompleted);
router.post("/completeModule",markModuleCompleted);
router.post("/CompletedNumberOfLectures",setCompletedQuestions);
router.post("/UncompletedModule",getUncompletedModule)
router.post("/getCompletedQuestion",getCompletedQuestions)
router.post("/updateCoins",updateCoins)
router.post("/getCoins",getCoins)

module.exports = router