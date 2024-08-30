import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Quiz from '../Quiz/QuizBox';
import { setContent, setQuiz, setSelectedModule } from '../../../slices/ModuleSlice';

function ViewModuleData() {

    const {content,quiz,selectedTopic} = useSelector((state)=>state.module);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(setQuiz(null));
      console.log("123",content,quiz,selectedTopic)
    },[])

    const nextQuizHandler = ()=>{
      dispatch(setContent(null));
      dispatch(setQuiz(selectedTopic.quiz))
    }

  return (
    <div>
        
        {quiz !==null && 
            <Quiz  questions={quiz}  topic={selectedTopic.topicNo} />
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