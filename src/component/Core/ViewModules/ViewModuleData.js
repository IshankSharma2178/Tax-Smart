import React from 'react'
import { useSelector } from 'react-redux'

function ViewModuleData() {

    const {content} = useSelector((state)=>state.module);

  return (
    <div>
        {content}
    </div>
  )
}

export default ViewModuleData