import Choices from './Choices';
import Next from './Next'

const ButtonContainer = (props) => {
    return (
        <div className="btn-container">
            <Choices value = {true} 
                operator = {props.operator} 
                givenNumber = {props.givenNumber} 
                misteryNumber = {props.misteryNumber}
                setStatus = {props.setStatus}
                answered = {props.answered}
                setAnswered = {props.setAnswered}
                progress = {props.progress}
                setProgress = {props.setProgress}
                score = {props.score}
                setScore ={props.setScore}/>
      
            <Choices value = {false} 
                operator = {props.operator} 
                givenNumber={props.givenNumber} 
                misteryNumber = {props.misteryNumber}
                setStatus = {props.setStatus} 
                answered = {props.answered}
                setAnswered = {props.setAnswered}
                progress = {props.progress}
                setProgress = {props.setProgress}
                score = {props.score}
                setScore ={props.setScore}/>
      
                <Next answered = {props.answered}
                    setAnswered = {props.setAnswered}
                    progress={props.progress}
                    restart={props.restart}/>
        </div>
    )
}

export default ButtonContainer
