import React, {useState} from 'react'
import { Answer } from '../'
import { useSelector } from 'react-redux';


export const Question = (props) => {

  const q = useSelector(state => state.questions) //(

  let quest
  let correct
  let incorrect = []

  if (q.length !== 0) {
    console.log(q)
    quest = q[props.question].question
    incorrect = q[props.question].incorrect_answers
    correct = q[props.question].correct_answer
    console.log('this is quest' + incorrect + correct)
  }

  
  // TOMS STUFF FOR BETTING///////////////////////////////////////////
  const [orderA,setOrderA] = useState('0')
  const [orderB,setOrderB] = useState('')
  const [orderC,setOrderC] = useState('0')
  const [orderD,setOrderD] = useState('0')

  function createRandOrder (){
    const rand1= Math.floor(Math.random() * (4 - 0 + 1) + 0)   
    setOrderA('bx'+rand1)
    const rand2= Math.floor(Math.random() * (4 - 0 + 1) + 0)   
    setOrderB('bx'+rand2)
    const rand3= Math.floor(Math.random() * (4 - 0 + 1) + 0)   
    setOrderC('bx'+rand3)
    const rand4= Math.floor(Math.random() * (4 - 0 + 1) + 0)   
    setOrderD('bx'+rand4)
  }
  //end of TOMS STUFF FOR BETTING///////////////////////////////////////////



  //need to go to the next question when an answer is chosen

  return (
    <>
    <div>

      <div className="question">{quest}</div>
        <div className="answers">
          <Answer bool={true} num="A" answer={correct} />
          <Answer bool={false} num="B" answer={incorrect[0]} />
          <Answer bool={false} num="C" answer={incorrect[1]} />
          <Answer bool={false} num="D" answer={incorrect[2]} />
        </div>
      </div>


      <div className="quiz">
          <div className='Container-Answers' onLoad={createRandOrder}>
            <div className='genBtn correctBtn bx3'  id={orderA}><Answer bool={true} num="A" answer={correct} /></div>
            <div className='genBtn wrongBtn bx4' id={orderB}><Answer bool={false} num="B" answer={incorrect[0]} /></div>
            <div className='genBtn wrongBtn bx1' id={orderC}><Answer bool={false} num="C" answer={incorrect[1]} /></div>
            <div className='genBtn wrongBtn bx2' id={orderD}><Answer bool={false} num="D" answer={incorrect[2]} /></div>
          </div>
      </div>


      <button onClick={ createRandOrder}>randomise </button>

    
    </>
  )
}
