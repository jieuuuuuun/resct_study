import React, { useState } from 'react';

//사용자가 이름을 입력하고 완료 버튼을 누르면 이름 뒤에 "님"을 붙인다.
//완료 버튼을 여러번 클릭하여도 님자가 한 번만 붙을 수 있도록 수정하기
//마지막 글자가 님이 있다면? 
const Name = () => {
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)
  const headleNameChange =(e) => {
    setName(e.target.value)
    setCount(0)
  }
  const handleNAmeOnClick = (e) => {
    //slice(시작인텍스, 종료 인텍스)
    //split("") 글자 자르기
    setCount(count + 1)
    if(!(count > 0)){
      if(name.includes("님")){
        setName(name + name.slice(name.length, -1).replaceAll("님", "") + "님")
      }else{
        setName(name + "님")
      }
    }
  }
  
  return (
    <div>
      <input type="text" 
      placeholder="이름을 입력하세요" 
      onChange={headleNameChange}
      />
      <p>{name}</p>
      <button onClick={handleNAmeOnClick}>완료 버튼</button>
    </div>
  );
};

export default Name;