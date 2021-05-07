import './App.css';
import {useEffect, useState} from 'react'
import Status from './components/Status'
import Score from './components/Score'
import ButtonContainer from './components/ButtonContainer'

const randomizeNumber = () => {
  let number = Math.floor(Math.random() * 5) + 1
  return number
}

const randomizeOperator = () => {
  const operators = ['<','>','=','>=','<=','!=']
  let number = Math.floor(Math.random() * 6)

  return operators[number]
}

function App() {

  const [givenNumber, setGivenNumber] = useState(0)
  const [misteryNumber, setMisteryNumber] = useState(0)
  const [operator, setOperator] = useState('')
  const [status, setStatus] = useState('')
  const [answered, setAnswered] = useState(false)
  const [progress, setProgress] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if(answered === false)
    {
      setGivenNumber(randomizeNumber())
      setMisteryNumber(randomizeNumber())
      setOperator(randomizeOperator())
    }
  }, [answered])
  
  const restart = () => {
    setScore(0)
    setStatus('')
    setProgress(0)
  }

  return (
    <div className="container">

    <h1 className='title'>Guessing Game?</h1>
    <h3 className="instructions">A conditional equation will be given below but 1 of the 2 numbers will be hidden. Guess if the equation is true or false and earn a point if your are right. Do your best to guess all 5 equations. Good Luck!</h3>

      <h1 className="equation"><span>{givenNumber}</span> <span>{operator}</span> <span>{answered ? misteryNumber : '?'}</span></h1>

      <ButtonContainer operator = {operator} 
      givenNumber = {givenNumber} 
      misteryNumber = {misteryNumber}
      setStatus = {setStatus}
      answered = {answered}
      setAnswered = {setAnswered}
      progress = {progress}
      setProgress = {setProgress}
      score = {score}
      setScore ={setScore}
      restart={restart}/>      
      <Status answered={answered}
      status={status}
      />
      <Score score={score} progress={progress}/>
    </div>
  );
}



export default App;
