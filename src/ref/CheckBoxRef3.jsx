import React, { useRef, useState } from "react";
import Hobby from "./Hobby";

//3번실습
//hobbies를 문자열이 아닌 li태그(컴포넌트)로 분리하여 출력한다.

const CheckBoxRef3 = () => {
  const [hobbies, setHobbies] = useState([]);
  const inputRef = useRef([])

  const handleHobbiesOnChange = (e) => {
    // console.log("e", e.target.checked);
    if(e.target.checked){
      // console.log([...hobbies, e.target.value]);
      setHobbies([...hobbies, e.target.value])
      
    }else{
      // console.log(hobbies.filter((hobby) => hobby !== e.target.value));
      setHobbies(hobbies.filter((hobby) => hobby !== e.target.value))
    }
    
  }

  const hobbyList = hobbies.map((hobby, i) => (
    <Hobby key={i} hobby={hobby}/>
  ))
  // console.log(hobbies);
  
  return (
    <div>
      <ul>
        {hobbyList}
      </ul>
      <div> 
        <label>
          <span>음악감상</span><input type="checkbox" onChange={(e) => {handleHobbiesOnChange(e)}} value="음악감상" name="hobby" ref={(el) => {inputRef.current[0] = el}} />
        </label>
        <label>
          <span>웹툰보기</span><input type="checkbox" onChange={(e) => {handleHobbiesOnChange(e)}} value="웹툰보기" name="hobby" ref={(el) => {inputRef.current[1] = el}} />
        </label>
        <label>
          <span>드라마보기</span><input type="checkbox" onChange={(e) => {handleHobbiesOnChange(e)}} value="드라마보기" name="hobby" ref={(el) => {inputRef.current[2] = el}} />
        </label>
      </div>
    </div>
  );
};

export default CheckBoxRef3;
