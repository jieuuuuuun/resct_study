import React, { useState } from 'react';

const Name = () => {
  const [name, setName] = useState("")
  //실습
  //사용자가 입력한 이름을 화면에 출력하기
  const onChangeName = (e) => {setName(e.target.value)}
  return (
    <div>
      {name}
      <input type="text" onChange={onChangeName}/>  
    </div>
  );
};

export default Name;