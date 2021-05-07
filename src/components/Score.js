const Score = (props) => {
    const hideEmoji = (value) =>{
        let wrong = props.progress - props.score
        let emojiVal = props.score - wrong
        
        if (value === emojiVal){
            return ''
        }else{
            return 'hidden'
        }
    }
    return (
        <h1>Score: {props.score+'/'+props.progress} 
        <span className={hideEmoji(-5)}>&#128557;</span>
        <span className={hideEmoji(-4)}>&#128546;</span>
        <span className={hideEmoji(-3)}>&#128561;</span>
        <span className={hideEmoji(-2)}>&#128531;</span>
        <span className={hideEmoji(-1)}>&#128533;</span>
        <span className={hideEmoji(0)}>&#128528;</span>
        <span className={hideEmoji(1)}>&#128527;</span>
        <span className={hideEmoji(2)}>&#128526;</span>
        <span className={hideEmoji(3)}>&#128522;</span>
        <span className={hideEmoji(4)}>&#128514;</span>
        <span className={hideEmoji(5)}>&#128519;</span></h1>
    )
}

export default Score
