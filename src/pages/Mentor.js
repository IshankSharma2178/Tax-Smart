import React from 'react';
import MentorCard from '../component/Core/Mentors/MentorCard';
import {MentorData} from "../data/MentorData"
import StaticNavbar from "../component/common/StaticNavbar"

function Mentor() {
  return (
    <div>
      <div className='max-w-[1360px] w-[95%] m-auto'>
        <StaticNavbar />
      </div>
      <div className='w-11/12 max-w-[1260px] mx-auto'>
      <div className='flex flex-row flex-wrap  justify-between gap-y-16'>
        {
          MentorData.map((data,index)=>(
            <MentorCard data={data}/>
          ))
        }
      </div>
      </div>
    </div>
  );
};

export default Mentor