import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Module1 } from '../../../data/ModulesData/Module1'; 
import { Module2 } from '../../../data/ModulesData/Module2'; 
import { Module3 } from '../../../data/ModulesData/Module3'; 
import { Module4 } from '../../../data/ModulesData/Module4'; 
import { setContent } from "../../../slices/ModuleSlice";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router';


function ModuleSidebar() {
    const [loading, setLoading] = useState(false);
    const { selectedModule } = useSelector((state) => state.module);
    const [sidebarData, setSidebarData] = useState([]);
    const navigate = useNavigate();
    const [openDropdowns, setOpenDropdowns] = useState({}); 
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('ModuleSidebar', selectedModule);
        if (selectedModule === 'module1') {
            setSidebarData(Module1);
        }else if (selectedModule === 'module2'){
            setSidebarData(Module2);
        }else if (selectedModule === 'module3'){
            setSidebarData(Module3);
        }else if (selectedModule === 'module4'){
            setSidebarData(Module4);
        }

        setLoading(true);
    }, [selectedModule]); 

    const clickHandler = (content) => {
        dispatch(setContent(content));
    }
 
    const toggleDropdown = (index) => {
        setOpenDropdowns((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto md:sticky md:top-0 md:h-screen md:overflow-y-auto">
            {!loading ? (
                <div>Loading...</div>
            ) : (
                <div className="p-4">
                <div
                    onClick={() => {
                    navigate("/modules");
                    }}
                    className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
                    title="back"
                >
                    <IoIosArrowBack size={30} />
                </div>
                    {sidebarData.map((data, index) => (
                        <div key={index} className="flex flex-col mb-2">
                            <button 
                                className="text-left font-bold" 
                                onClick={() => toggleDropdown(index)}
                            >
                                {data.title}
                            </button>
                            {openDropdowns[index] && (               
                                <div className="ml-4 mt-2">
                                    <button onClick={() => clickHandler(data.content)} className="cursor-pointer hover:text-blue-500">
                                        Content
                                    </button>
                                    <div className="cursor-pointer hover:text-blue-500">
                                        Quiz
                                    </div>
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
