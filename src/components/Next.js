const Next = (props) => {
    const refresh = () => {
        if(props.progress === 5){
            props.restart()
        }
            
        props.setAnswered(false)
        
    }
    const buttonName = () => {
         if (props.progress === 5){
            return 'Play Again'
         }
         else{
             return 'NEXT'
         }
    }
    return (
        <button className={props.answered ? 'next' : 'next hidden' } 
        onClick={() => refresh()}>
            {buttonName()}
        </button>
    )
}

export default Next
