import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setIsCorrect(index === 1); // Replace '1' with the correct answer index for your quiz
  };

  
  const handleNextQuestion = () => {
    setSelectedOption(null); 
    setIsCorrect(null); 

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("End of questions");
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Awesome Quiz Application</h2>
        <div className=" text-blue-600 font-bold py-1 px-3 rounded-full text-sm">
          Time Left <span className="ml-1 p-1 bg-gray-800 text-white rounded">08</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">{currentQuestionIndex + 1}. {question.text}</h3>
        <ul className="space-y-2">
          {question.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`cursor-pointer p-2 border rounded-md flex justify-between items-center 
                ${selectedOption === index ? (isCorrect ? 'bg-caribbeangreen-100 border-caribbeangreen-400' : 'bg-pink-100 border-pink-300') : ''}`}
            >
              {option}
              {selectedOption === index && (
                isCorrect ? (
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
        >
          Next Que
        </button>
      </div>
    </div>
  );
};

export default Quiz;