const Choices = (props) => {
    
    return (
        <button className={nameOfClass(props.value,props.answered)}
        onClick={() => checkAnswer(props.value,props.operator,
        props.givenNumber,props.misteryNumber)}>
            {props.value.toString().toUpperCase()}
        </button>
    )

    function checkAnswer(value,operator,num1,num2){
        let result
        switch(operator) {
        case '<':
            result = num1 < num2;
            break;
        case '>':
            result = num1 > num2;
            break;
        case '=':
            result = num1 === num2;
            break;
        case '>=':
            result = num1 >= num2;
            break;
        case '<=':
            result = num1 <= num2;
            break;
        case '!=':
            result = num1 !== num2;
        }
        if(value === result)
        {
        props.setStatus('Right')
        props.setScore(props.score + 1)
        }else{
        props.setStatus('Wrong')
        }
        props.setAnswered(true)
        props.setProgress(props.progress + 1)
  }

  function nameOfClass(value,answered){
      let string1 = ''
      let string2 = ''
      if (value){
        string1 = 'true'
      }else{
          string1 = 'false'
      }
      if (answered){
          string2 = 'hidden'
      }

      if (props.progress === 5){
          string2 = 'hidden'
      }

      return `${string1} ${string2}`
  }
}

export default Choices
