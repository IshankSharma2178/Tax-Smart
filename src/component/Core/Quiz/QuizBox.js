import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setCompletedQuestions } from "../../../Servies/operations/module";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const { user, selectedTopic } = useSelector((state) => state.auth);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setShowResult] = useState(false);

  const handleAnswerOptionClick = () => {
    if (selectedOption === "") return;

    const correctAnswer = questions[0].quiz[currentQuestion].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    // Save the answer with correctness
    setAnswers([
      ...answers,
      { option: selectedOption, isCorrect, correctAnswer },
    ]);
    setSelectedOption("");
    setSelectedIndex(null);

    if (currentQuestion + 1 < questions[0].quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
      handleQuizSubmit([
        ...answers,
        { option: selectedOption, isCorrect, correctAnswer },
      ]);
    }
  };

  const handleQuizSubmit = async (finalAnswers) => {
    try {
      await setCompletedQuestions({
        email: user.email,
        topic: selectedTopic,
        module: 0,
        completedQuestions: finalAnswers,
      });
    } catch (error) {
      console.error("Error submitting quiz results:", error);
    }
    setShowResult(true);
  };

  const selectHandler = (option, index) => {
    setSelectedOption(option);
    setSelectedIndex(index);
  };

  return (
    <div className="container mx-auto p-4">
      {result ? (
        <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold ">Your Score : {score} / {questions[0].quiz.length}</div>
          {answers.map((answer, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded min-w-[700px] px-8 pt-6 pb-8 mb-4 border ${
                answer.isCorrect ? "border-green-500" : "border-red-500"
              }`}
            >
              <h2 className="text-xl font-bold mb-4">
                {questions[0].quiz[index].text}
              </h2>
              <ul>
                {questions[0].quiz[index].options.map((option, idx) => (
                  <li key={idx} className="mb-2">
                    <button
                      className={`w-full text-black font-bold py-2 px-4 rounded border ${
                        option === answer.correctAnswer
                          ? "bg-caribbeangreen-200"
                          : option === answer.option && !answer.isCorrect
                          ? "bg-pink-200"
                          : ""
                      }`}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Quiz Application</h1>
          <div className="bg-white shadow-md rounded  min-w-[700px] px-8 pt-6 pb-8 mb-4 border border-richblack-50">
            <h2 className="text-xl font-bold mb-4">
              {questions[0].quiz[currentQuestion].text}
            </h2>
            <ul>
              {questions[0].quiz[currentQuestion].options.map((option, index) => (
                <li key={index} className="mb-2">
                  <button
                    onClick={() => selectHandler(option, index)}
                    className={`w-full hover:bg-blue-200 text-black font-bold py-2 px-4 rounded ${
                      selectedIndex === index ? "bg-blue-200" : ""
                    } border border-richblack-50`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleAnswerOptionClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              {currentQuestion + 1 === questions[0].quiz.length ? "Submit" : "Next"}
            </button>
          </div>
          <p className="text-center">
            Question {currentQuestion + 1} of {questions[0].quiz.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
