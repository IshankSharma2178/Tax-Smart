import React from 'react'
import { useSelector } from 'react-redux'
import Quiz from '../Quiz/quiz';

function ViewModuleData() {

    const {content,quiz} = useSelector((state)=>state.module);

    console.log(quiz);

  return (
    <div>
        {content}
        {quiz !==null && 
            <Quiz  questions={quiz}/>
        }
    </div>
  )
}

export default ViewModuleData