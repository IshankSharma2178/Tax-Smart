import React, { useEffect, useState } from 'react';
import ModulesPage from '../component/Core/Modules/ModulesPage';
import StaticNavbar from "../component/common/StaticNavbar";
import { ModulesCardData } from "../data/ModulesCardData";
import { getUncompletedModules } from '../Servies/operations/module';
import { useSelector } from 'react-redux';

function Modules() {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUncompletedModules({ email: user.email });
        console.log("result api success", result);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    
    fetchData();
  }, [user.email]);

  const img = {
    img1: "https://images.yourstory.com/cs/2/e641e900925711e9926177f451727da9/shutterstock1407910901-1597380299153.png?mode=crop&crop=faces&ar=16%3A9&format=auto&w=3840&q=75",
    img2: "https://www.taxmann.com/post/wp-content/uploads/2022/08/2.-Guide-to-GST-%E2%80%93-Basic.jpg",
    img3: "https://images.yourstory.com/cs/2/f02aced0d86311e98e0865c1f0fe59a2/investment-1618121233003.png?mode=crop&crop=faces&ar=16%3A9&format=auto&w=3840&q=75",
    img4: "https://assets.entrepreneur.com/content/3x2/2000/1638510328-MyPost78.jpg?format=pjeg&auto=webp&crop=16:9",
    img5: "https://img.freepik.com/free-photo/map-lying-wooden-table_53876-23515.jpg"
  };

  return (
    <div>
      <div className='max-w-[1360px] w-[95%] m-auto'>
        <StaticNavbar />
      </div>
      <div className='max-w-[1260px] w-11/12 m-auto mb-14'>
        <div className='flex flex-row flex-wrap gap-4 justify-center'>
          {ModulesCardData.map((data, index) => (
            <div key={index} className=''>
              <ModulesPage 
                images={img[`img${index + 1}`]} 
                ModuleName={data.ModuleName} 
                notShow={data} 
                link={data.link} 
                Description={data.Description} 
                noOfModules={data.noOfModules} 
                index={index} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modules;
