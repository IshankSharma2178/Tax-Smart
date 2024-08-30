import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Module1 } from '../../../data/ModulesData/Modules1/Module1Data'; 
import { Module2 } from '../../../data/ModulesData/Module2'; 
import { Module3 } from '../../../data/ModulesData/Module3'; 
import { Module4 } from '../../../data/ModulesData/Module4'; 
import { setContent, setQuiz, setSelectedTopic } from "../../../slices/ModuleSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router';
import { FaHome } from 'react-icons/fa';

function ModuleSidebar() {
    const [loading, setLoading] = useState(true);
    const { selectedModule, quiz } = useSelector((state) => state.module);
    const [sidebarData, setSidebarData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeContent, setActiveContent] = useState(null);
    const [activeQuiz, setActiveQuiz] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        switch (selectedModule) {
            case 'module1':
                setSidebarData(Module1);
                break;
            case 'module2':
                setSidebarData(Module2);
                break;
            case 'module3':
                setSidebarData(Module3);
                break;
            case 'module4':
                setSidebarData(Module4);
                break;
            default:
                setSidebarData([]);
        }

        setLoading(false);
    }, [selectedModule]); 

    const ContentClickHandler = (data) => {
        dispatch(setQuiz(null));
        dispatch(setContent(data.content));
        dispatch(setSelectedTopic(data));
        console.log(data);
        setActiveContent(data.content);
        setActiveQuiz(null);
    };

    const QuizHandler = (quizData) => {
        dispatch(setContent(null));
        dispatch(setQuiz(quizData));
        setActiveContent(null);
        setActiveQuiz(quizData);
    };

    useEffect(() => {
        if (quiz) {
            QuizHandler(quiz);
        }
    }, [quiz]);

    const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto md:sticky md:top-0 md:h-screen md:overflow-y-auto bg-white shadow-md p-4">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div
                        onClick={() => navigate("/modules")}
                        className="flex items-center space-x-2 cursor-pointer mb-4 text-blue-500"
                    >
                        <IoIosArrowBack size={20} />
                        <span className="text-sm">Main menu</span>
                    </div>

                    <div className="mb-4">
                        <span className="text-gray-500 text-xs block">01</span>
                        <span className="text-lg font-bold">Introduction to Generative AI</span>
                    </div>

                    <div className="bg-blue-100 p-2 rounded-lg mb-2 flex items-center space-x-2 cursor-pointer">
                        <FaHome className="text-blue-500" />
                        <span className="text-blue-500 font-semibold">Course overview</span>
                    </div>

                    {sidebarData.map((data, index) => (
                        <div key={index} className="flex flex-col mb-2">
                            <button 
                                className={`flex justify-between items-center w-full text-left font-medium py-2 px-2 rounded-lg hover:bg-gray-100 ${activeIndex === index ? 'bg-blue-25' : 'hover:bg-blue-5'}`} 
                                onClick={() => toggleDropdown(index)}
                            >
                                {data.title}
                                <IoIosArrowForward size={16} className={`text-gray-400 ${activeIndex === index ? "rotate-90" : "rotate-0"} transition-all duration-200`} />
                            </button>
                            {activeIndex === index && (               
                                <div className="mt-2 flex flex-col space-y-2 transition-all duration-200">
                                    <button 
                                        onClick={() => ContentClickHandler(data)} 
                                        className={`cursor-pointer text-left px-6 py-1 rounded-lg ${activeContent === data.content && !quiz ? 'bg-yellow-25' : 'hover:bg-yellow-5'}`}
                                    >
                                        Content
                                    </button>
                                    <button 
                                        onClick={() => QuizHandler(data.quiz)} 
                                        className={`cursor-pointer px-6 text-left py-1 rounded-lg ${activeQuiz === data.quiz || quiz === data.quiz ? 'bg-yellow-25' : 'hover:bg-yellow-5'}`}
                                    >
                                        Quiz
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ModuleSidebar;
