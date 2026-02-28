import React, { useRef, useState } from 'react';

//사용자가 이름을 입력하고 완료 버튼을 누르면 이름 뒤에 "님"을 붙인다.
//완료 버튼을 여러번 클릭하여도 님자가 한 번만 붙을 수 있도록 수정하기 
const Name2 = () => {
  const [name, setName] = useState("")
  const isDoneRef = useRef(false)
  
  const handleNameChange = (e) => {
    setName(e.target.value)
    isDoneRef.current = false
  }

  const nameRef = useRef()//document.getquery....가져오는거랑 같다.
  const handleNAmeOnClick = () => {
    // console.log(nameRef.current.innerText + "님")
    if(!isDoneRef.current){
      setName(name + "님")
      isDoneRef.current = true;
    }
  }
  return (
    <div>
      <input type="text" 
      placeholder="이름을 입력하세요" 
      onChange={handleNameChange}
      />
      <p ref={nameRef}>{name}</p>
      <button onClick={handleNAmeOnClick}>완료 버튼</button>
    </div>
  );
};

export default Name2;