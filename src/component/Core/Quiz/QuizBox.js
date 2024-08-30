import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnsArray, setSelectedAnsArray] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setSelectedAnsArray([...selectedAnsArray, selectedOption]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
    setSelectedOption(null);
  };

  const calculateScore = () => {
    return selectedAnsArray.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const question = questions[currentQuestionIndex];

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quiz Results</h2>
        <p className="text-lg mb-2">You answered {score} out of {questions.length} questions correctly!</p>
        <ul className="space-y-4">
          {questions.map((question, index) => (
            <li key={index} className="p-2 border rounded-md">
              <h3 className="font-bold">{index + 1}. {question.text}</h3>
              <ul className="mt-2 space-y-1">
                {question.options.map((option, optIndex) => (
                  <li
                    key={optIndex}
                    className={`p-2 border rounded-md flex justify-between items-center
                      ${selectedAnsArray[index] === option && option === question.correctAnswer ? 'bg-green-100 border-green-400' : ''}
                      ${selectedAnsArray[index] === option && option !== question.correctAnswer ? 'bg-red-100 border-red-400' : ''}
                      ${option === question.correctAnswer && selectedAnsArray[index] !== option ? 'bg-green-100 border-green-400' : ''}
                    `}
                  >
                    {option}
                    {selectedAnsArray[index] === option && option === question.correctAnswer && (
                      <IoMdCheckmarkCircleOutline className="text-green-600" size={20} />
                    )}
                    {selectedAnsArray[index] === option && option !== question.correctAnswer && (
                      <IoMdCloseCircleOutline className="text-red-600" size={20} />
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Awesome Quiz Application</h2>
        <div className="text-blue-600 font-bold py-1 px-3 rounded-full text-sm">
          Time Left <span className="ml-1 p-1 bg-gray-800 text-white rounded">08</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">{currentQuestionIndex + 1}. {question.text}</h3>
        <ul className="space-y-2">
          {question.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`cursor-pointer p-2 border rounded-md flex justify-between items-center
                ${selectedOption === option ? (option === question.correctAnswer ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400') : ''}`}
            >
              {option}
              {selectedOption === option && (
                option === question.correctAnswer ? (
                  <IoMdCheckmarkCircleOutline className="text-green-600" size={20} />
                ) : (
                  <IoMdCloseCircleOutline className="text-red-600" size={20} />
                )
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">{currentQuestionIndex + 1} of {questions.length} Questions</span>
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={selectedOption === null}
        >
          Next Ques
        </button>
      </div>
    </div>
  );
};

export default Quiz;
