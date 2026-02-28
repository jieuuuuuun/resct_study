import React, { useRef, useState } from "react";

//사용자가 체크박스를 클릭하면 체크한 취미를 화면에 실시간으로 보여준다.
//사용자가 체크박스를 해제하면 체크한 취미도 화면에서 사라진다.

const CheckBoxRef2 = () => {
  const [hobbies, setHobbies] = useState("");
  const inputRef = useRef([])
  const handleHobbiesOnChange = () => {
    const hobby = inputRef.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)
      .join(", ")

      setHobbies(hobby)
  }

  return (
    <div>
      <p>{hobbies}</p>
      <div> 
        <label>
          <span>음악감상</span><input type="checkbox" onChange={handleHobbiesOnChange} value="음악감상" name="hobby" ref={(el) => {inputRef.current[0] = el}} />
        </label>
        <label>
          <span>웹툰보기</span><input type="checkbox" onChange={handleHobbiesOnChange} value="웹툰보기" name="hobby" ref={(el) => {inputRef.current[1] = el}} />
        </label>
        <label>
          <span>드라마보기</span><input type="checkbox" onChange={handleHobbiesOnChange} value="드라마보기" name="hobby" ref={(el) => {inputRef.current[2] = el}} />
        </label>
      </div>
    </div>
  );
};

export default CheckBoxRef2;
