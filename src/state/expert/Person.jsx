import React, { useState } from 'react';

const Person = () => {
  const [info, setInfo] = useState({
    name: "",
    age : 0
  })
  //사용자가 이름을 입력했다면 name의 컬러를 블루로 변경하기
  //사용자가 나이를 입려했다면 age의 fontsize를 30px로 변경하기
  const [nameStyle, setNameStyle] = useState({color:""})
  const [ageStyel, setAgeStyle] = useState({fontSize:""})

  const [target, setTarget] = useState("")

  const handleInfoOnChange = (e) => {
    setTarget(e.target.value)
  }

  const handleKeyDown = (e) => {
    const isNumber = target - 0
    if(e.key === 'Enter'){
      if(isNumber){
        setInfo({...info, age: target})
        setAgeStyle({fontSize:"30px"})
        setNameStyle({color:""})
      } else {
        setInfo({...info, name: target})
        setNameStyle({color:"blue"})
        setAgeStyle({fontSize: ""})
      }
    }
    
  }
  
  return (
    <div>
      <p style={nameStyle}>이름 : {info.name}</p>
      <p style={ageStyel}>나이 : {info.age}</p>
      <input 
      type="text"
      placeholder='정보를 입력하세요'
      onChange={handleInfoOnChange}
      onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Person;