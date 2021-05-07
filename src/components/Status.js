const Status = (props) => {

    const clapCheck = () =>{
        if (props.answered){
            if(props.status === 'Right'){
                return ''
            }
        }
        return 'hidden'
    }

    const thumbsdownCheck = () =>{
        if (props.answered){
            if(props.status === 'Wrong'){
                return ''
            }
        }
        return 'hidden'
    }
    return (
        <h1 className='message'>{props.answered ? props.status : 'Think Carefully!'}
        <span className={clapCheck()}>&#128079;</span> 
        <span className={thumbsdownCheck()}>&#128078;</span></h1>
    )
}

export default Status
