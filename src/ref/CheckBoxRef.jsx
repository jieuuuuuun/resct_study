import React, { useRef, useState } from "react";

const CheckBoxRef = () => {
  const [hobbies, setHobbies] = useState("");
  const inputRef = useRef([]);

  //버튼 클릭했을 때 체크가 되어있는지 확인
  //fliter검사
  const handleHobbiesOnClick = () => {
    const hobby = inputRef.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)
      .join(",")

      setHobbies(hobby)
  };

  return (
    <div>
      <p>{hobbies}</p>
      <div>
        <label>
          <span>게임</span>
          <input
            type="checkbox"
            value="게임"
            name="hobby"
            ref={(el) => (inputRef.current[0] = el)}
          />
        </label>
        <label>
          <span>음악감상</span>
          <input
            type="checkbox"
            
            name="hobby"
            ref={(el) => (inputRef.current[1] = el)}
          />
        </label>
        <label>
          <span>웹툰보기</span>
          <input
            type="checkbox"
            
            name="hobby"
            ref={(el) => (inputRef.current[2] = el)}
          />
        </label>
      </div>
      <button onClick={handleHobbiesOnClick}>취미 확인하기😎</button>
    </div>
  );
};

export default CheckBoxRef;
