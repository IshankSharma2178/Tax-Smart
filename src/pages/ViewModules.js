import React from 'react'
import { Outlet } from 'react-router'
import ModuleSidebar from '../component/Core/ViewModules/ModuleSidebar'
import StaticNavbar from '../component/common/StaticNavbar'

function ViewModules() {
  return (
    <div> 
        <div className='max-w-[1360px] w-[95%] m-auto'>
            <StaticNavbar />
        </div>
        <div className="relative flex min-h-[calc(100vh-3.5rem)]">
            <ModuleSidebar  />
                <div className=" mx-auto  w-11/12 max-w-[1260px] ">
                <Outlet />
                </div>       
        </div>
    </div>
  )
}

export default ViewModules