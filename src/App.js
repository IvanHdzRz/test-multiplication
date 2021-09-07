
import './App.css';
import { useEffect, useState } from 'react';
import { MultiplationDisplay } from './components/MultiplationDisplay';
import { Results } from './components/Results';
import { CronometerDisplay } from './components/CronometerDisplay';
import { useTemporizator } from './hooks/useTemporizator';
import {generateRamdomNumber} from './helpers/generateRamdomNumber'
import { AnswersInput } from './components/AnswersInput';

const initialState={
  secondsToRespond:10,
  hasStartTest:false,
  multA:generateRamdomNumber(),
  multB:generateRamdomNumber(),
  questionsAsked:0,
  correctAnswers:0,
  totalQuestions:10,
  userAnswerd:"",
  testHasFinished:false
}

function App() {
  const [state, setstate] = useState(initialState)
  const {secondsToRespond,hasStartTest,multA,multB,questionsAsked,correctAnswers,userAnswerd,testHasFinished,totalQuestions}=state
  const [timeLeft,startTemp,stopTemp,resetTemp,isRunning]= useTemporizator({initialTime:secondsToRespond})

  //for cronometer
  const handleStartTest=()=>{
    setstate({...state,hasStartTest:true})
    startTemp();
  }

  const onCheckAnswerd=()=>{
    
    const isCorrectAsnwer=!isNaN( parseInt(userAnswerd))&&multA*multB===parseInt(userAnswerd)
    
    setstate({
      ...state,
      questionsAsked:questionsAsked+1, 
      correctAnswers:isCorrectAsnwer?correctAnswers+1:correctAnswers,
      userAnswerd:"",
      multA:generateRamdomNumber(),
      multB:generateRamdomNumber(),
    })
    resetTemp();
    startTemp();
  }

  const handleChange=(e)=>{
    e.preventDefault();
    const {target}=e
    setstate((prev)=>({...prev,userAnswerd:target.value}))
  }

  //si llega a 0 verificar la respuesta 
  useEffect(() => {
    if(timeLeft===0){
      onCheckAnswerd();
    }
  },[timeLeft])
  //verifica si ya acabamos el test
  useEffect(() => {
    if(questionsAsked===totalQuestions){
      setstate((prev)=>({...prev,testHasFinished:true}))
      stopTemp();
    }
  }, [questionsAsked,totalQuestions])
  
  return (
    <div className="appContainer">
      {
        !hasStartTest&&
        <button onClick={handleStartTest} className="btnStart">
          Iniciar prueba
        </button>
      }
      <CronometerDisplay seconds={timeLeft} isRunning={isRunning} />
      <MultiplationDisplay a={multA} b={multB} />
      {
        hasStartTest&&!testHasFinished&&
          <AnswersInput 
            name="userAnswerd" 
            onChange={handleChange} 
            value={userAnswerd}
            verifyAnswerd={onCheckAnswerd}
          />
      }
      <Results correctAnswers={correctAnswers} totalQuestions={questionsAsked} />
      
    </div>
  )
}

export default App;
