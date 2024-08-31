import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Quiz from '../Quiz/QuizBox';
import { setContent, setQuiz, setSelectedModule } from '../../../slices/ModuleSlice';

function ViewModuleData() {
  const { content, quiz, selectedTopic } = useSelector((state) => state.module);
  const dispatch = useDispatch();

  console.log("Conetne :  ",selectedTopic)

  
  return (
    <div>
      {quiz !== null ? (
        <Quiz questions={content} topic={1} />
      ) : (
        <div>
        <div
            dangerouslySetInnerHTML={{ __html: content[selectedTopic]["content"] }}
          />
          <div>
            <button >NEXT</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewModuleData;
