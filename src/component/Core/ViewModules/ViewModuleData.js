import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Quiz from '../Quiz/Quiz';
import { setContent, setQuiz } from '../../../slices/ModuleSlice';

function ViewModuleData() {

    const {content,quiz,selectedTopic} = useSelector((state)=>state.module);
    const dispatch = useDispatch();

    const nextQuizHandler = ()=>{
      dispatch(setContent(null));
      dispatch(setQuiz(selectedTopic.quiz))
    }

  return (
    <div>
        
        {quiz !==null && 
            <Quiz  questions={quiz}/>
        }
        {
          quiz===null &&(
            <div>
              {content}
              <div>
                <button onClick={()=>{nextQuizHandler()}}>NEXT</button>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default ViewModuleData