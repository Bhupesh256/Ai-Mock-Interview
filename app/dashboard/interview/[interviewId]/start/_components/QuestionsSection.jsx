'use client'
import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {


  const textToSpeech=(text)=>{
    if('speechSynthesis' in window){
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else{
      alert('Your browser does not support text-to-speech functionality.')
    }
  }
  return mockInterviewQuestion&&(
    <div className='p-5 border rounded-s-2xl gap-10 my-10'>
       <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-10'>
         {mockInterviewQuestion&&mockInterviewQuestion.map((question,index)=>(
            <h2
            className={[
              'p-1 bg-secondary rounded-br-lg text-xs md:text-sm text-center cursor-pointer',
              activeQuestionIndex === index ? 'bg-blue-700 text-white' : ''
            ].join(' ')}
          >
            Question #{index + 1}
          </h2>
        ))}
       </div>
       <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
       <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}/>

       <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
          <h2 className='flex gap-2 items-center text-primary'>
            <Lightbulb/>
            <strong>Note:</strong>
          </h2>
          <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
       </div>
    
    </div>
  )
}

export default QuestionsSection
