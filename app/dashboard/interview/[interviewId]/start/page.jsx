"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { int } from 'drizzle-orm/mysql-core';

function StartInterview({params}) {

     const [interviewData,setInterviewData]=useState();
     const [mockInterviewQuestion,setMockInterviewQuestion]=useState();
     const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);
     useEffect(()=>{
        GetInterviewDetails();
     },[]);


     const GetInterviewDetails = async () => {
        const result = await db
          .select()
          .from(MockInterview)
          .where(eq(MockInterview.mockId, params.interviewId));
          
          const jsonMockResp=JSON.parse(result[0].jsonMockResp)
          console.log(jsonMockResp)
          setMockInterviewQuestion(jsonMockResp);
          setInterviewData(result[0]);
      }
  return (
    <div>
       <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Question */}
        <QuestionsSection 
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
        />

        {/* video/ Audio Recording */}
        <RecordAnswerSection
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
        interviewData={interviewData}
        />

       </div>
    </div>
  )
}

export default StartInterview