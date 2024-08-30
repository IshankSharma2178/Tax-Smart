import React, { useEffect, useState } from 'react';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setCompletedQuestions, getCompletedQuestions } from '../../../Servies/operations/module'; 

const Quiz = ({ questions, topic }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnsArray, setSelectedAnsArray] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const [answers, setAnswer] = useState([]);
  const { selectedModule, quiz } = useSelector((state) => state.module);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [doSubmit, setDoSubmit] = useState(false);

  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setSelectedAnsArray((prevSelectedAnsArray) => [...prevSelectedAnsArray, selectedOption]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      setDoSubmit(true);
      setAnswer(selectedAnsArray);
    }
    setSelectedOption(null);
  };

  useEffect(() => {
    if (showResults) {
      console.log('Selected answers array updated at submit:', selectedAnsArray);
      SubmitHandler();
    }
  }, [doSubmit, selectedAnsArray]);

  const calculateScore = () => {
    const targetArray = selectedAnsArray.length > 0 ? selectedAnsArray : answers;
    return targetArray.reduce((score, answer, index) => {
      return answer === questions[index]?.correctAnswer ? score + 1 : score;
    }, 0);
  };

  const SubmitHandler = () => {
    try {
      console.log(user.email, selectedModule, selectedAnsArray, questions);
      dispatch(
        setCompletedQuestions({
          module: selectedModule,
          topic: topic,
          email: user.email,
          completedQuestions: selectedAnsArray,
        })
      );
      setAnswer(
        getCompletedQuestions({
          email: user.email,
          topic: topic,
          module: selectedModule,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setAnswer([]);
    console.log("answer =>", answers);
  }, [selectedModule]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await getCompletedQuestions({
          email: user.email,
          topic: topic,
          module: selectedModule,
        });
        console.log("result:", result);
        if (result && result.length > 0) {
          setAnswer(result);
        } else {
          setAnswer([]);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
        setAnswer([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [quiz]);

  // Ensure questions are available and index is within bounds
  const question = questions?.[currentQuestionIndex];

  if (loading) {
    return (
      <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
        Loading...
      </div>
    );
  }

  if (!question) {
    // Handle the case where no question is available
    return (
      <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
        No questions available.
      </div>
    );
  }

  if (answers.length > 0) {
    const score = calculateScore();
    return (
      <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quiz Results</h2>
        <p className="text-lg mb-2">
          You answered {score} out of {questions.length} questions correctly!
        </p>
        <ul className="space-y-4">
          {questions.map((question, index) => (
            <li key={index} className="p-2 border rounded-md">
              <h3 className="font-bold">
                {index + 1}. {question.text}
              </h3>
              <ul className="mt-2 space-y-1">
                {question.options.map((option, optIndex) => (
                  <li
                    key={optIndex}
                    className={`p-2 border rounded-md flex justify-between items-center 
                        ${option === question.correctAnswer ? "bg-caribbeangreen-100" : ""} 
                        ${answers[index] && answers[index] === option && option === question.correctAnswer ? "bg-caribbeangreen-100" : ""}
                        ${answers[index] && answers[index] === option && option !== question.correctAnswer ? "bg-pink-100" : ""}
                    `}
                  >
                    {option}
                    {answers[index] && answers[index] === option && option === question.correctAnswer && (
                      <IoMdCheckmarkCircleOutline className="text-green-600" size={20} />
                    )}
                    {answers[index] && answers[index] === option && option !== question.correctAnswer && (
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
        <h3 className="text-lg font-bold mb-2">
          {currentQuestionIndex + 1}. {question.text}
        </h3>
        <ul className="space-y-2">
          {question.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`cursor-pointer p-2 border rounded-md flex justify-between items-center
                ${selectedOption === option ? 'bg-blue-100 border-blue-400' : ''}`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          {currentQuestionIndex + 1} of {questions.length} Questions
        </span>
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={selectedOption === null}
        >
          {currentQuestionIndex === questions.length - 1 ? <div>Submit</div> : <div>Next</div>}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
