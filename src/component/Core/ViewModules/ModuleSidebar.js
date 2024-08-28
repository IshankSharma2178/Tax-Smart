import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Module1 } from '../../../data/ModulesData/Modules1/Module1Data'; 
import { Module2 } from '../../../data/ModulesData/Module2'; 
import { Module3 } from '../../../data/ModulesData/Module3'; 
import { Module4 } from '../../../data/ModulesData/Module4'; 
import { setContent, setQuiz } from "../../../slices/ModuleSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router';
import { FaHome } from 'react-icons/fa';

function ModuleSidebar() {
    const [loading, setLoading] = useState(false);
    const { selectedModule } = useSelector((state) => state.module);
    const [sidebarData, setSidebarData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeContent, setActiveContent] = useState(null);
    const [activeQuiz, setActiveQuiz] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedModule === 'module1') {
            setSidebarData(Module1);
        } else if (selectedModule === 'module2') {
            setSidebarData(Module2);
        } else if (selectedModule === 'module3') {
            setSidebarData(Module3);
        } else if (selectedModule === 'module4') {
            setSidebarData(Module4);
        }

        setLoading(true);
    }, [selectedModule]); 

    const ContentClickHandler = (content) => {
        dispatch(setQuiz(null));
        dispatch(setContent(content));
        setActiveContent(content);
        setActiveQuiz(null);
    }

    const QuizHandler = (quizData) => {
        dispatch(setContent(null));
        dispatch(setQuiz(quizData));
        setActiveContent(null);
        setActiveQuiz(quizData);
    }

    const toggleDropdown = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto md:sticky md:top-0 md:h-screen md:overflow-y-auto bg-white shadow-md p-4">
            {!loading ? (
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
                                className={`flex justify-between items-center  w-full text-left font-medium py-2 px-2 rounded-lg hover:bg-gray-100 ${activeIndex === index ? 'bg-blue-25' : 'hover:bg-blue-5 '}`} 
                                onClick={() => toggleDropdown(index)}
                            >
                                {data.title}
                                <IoIosArrowForward size={16} className="text-gray-400" />
                            </button>
                            {activeIndex === index && (               
                                <div className="ml-4 mt-2 flex flex-col space-y-2">
                                    <button 
                                        onClick={() => ContentClickHandler(data.content)} 
                                        className={`cursor-pointer px-2 py-1 rounded-lg ${activeContent === data.content ? 'bg-yellow-25' : 'hover:bg-yellow-5'}`}
                                    >
                                        Content
                                    </button>
                                    <button 
                                        onClick={() => QuizHandler(data.quiz)} 
                                        className={`cursor-pointer px-2 py-1 rounded-lg ${activeQuiz === data.quiz ? 'bg-yellow-25' : 'hover:bg-yellow-5'}`}
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
