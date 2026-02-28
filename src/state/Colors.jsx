import React, { useState } from 'react';

const Colors = () => {

  const [result, setResult] = useState("")
  const [color, setColor] = useState("")

  const onChangeResult = (e) => {
    //블루, 핑크, 블랙
    let value = e.target.value
    setResult(value)
  
    if(value ==='블루'){
      setColor('blue')
    }else if(value === '핑크'){
      setColor('pink')
    } else {
      setColor('black')
    }
  }
  console.log(color)
  return (
    <div>
      <h1 style={{color}}>{result}</h1>
      <input type="text" onChange={onChangeResult} />
    </div>
    );
  };

  export default Colors;