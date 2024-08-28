import React from 'react'
import ModulesPage from '../component/Core/Modules/ModulesPage'
import StaticNavbar from "../component/common/StaticNavbar"
import {ModulesCardData} from "../data/ModulesCardData"

function Modules() {
  return (
    <div>
      <div className='max-w-[1360px] w-[95%] m-auto'>
        <StaticNavbar />
      </div>
      <div className='max-w-[1260px] w-11/12 m-auto mb-14 '>
        <div className='flex flex-row flex-wrap gap-4 justify-center '>
          { 
            ModulesCardData.map((data,index)=>(
              <div className=''>
                <ModulesPage ModuleName={data.ModuleName} link={data.link} Description={data.Description} noOfModules={data.noOfModules} index={index} />
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Modules