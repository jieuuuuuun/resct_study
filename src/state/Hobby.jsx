import React, { useState } from 'react';

const Hobby = () => {
  //사용자에게 취미를 입력 받고 화면에 실시간으로 출력한다.
  //취미가 축구라면, 글자 크기를 50px로 바꾼다.
  //취미가 농구라면, 글자의 컬러를 blue로 바꾼다.
  const [hobby, setHobby] = useState("")
  const [style, setStyle] = useState({
    fontSize:"",
    color:""
  })

  const handleHobbyChange = (e) => {
    const newHobby = e.target.value
    setHobby(newHobby)

    if(newHobby === "축구"){
      setStyle({fontSize:"50px"})
    } else if(newHobby === "농구"){
      setStyle({color:"blue"})
    }else{
      setStyle({
        fontSize:"",
        color:""
      })
    }
  }
  
  return (
    <div style={style}>
      <p>{hobby}</p>
      <input type="text" onChange={handleHobbyChange} />
    </div>
  );
};

export default Hobby;