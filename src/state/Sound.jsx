import React, { useState } from 'react';

const Sound = () => {
  //강아지버튼을 누르면 "멍멍"
  //고양이버튼을 누르면 "냐옹"
  const [sound, setSound] = useState("")

  const catSound = () => {setSound("냐옹")}
  const dogSound = () => {setSound("멍멍")}

  return (
    <div>
      <button onClick={catSound}>고양이 버튼</button>
      {sound}
      <button onClick={dogSound}>강아지 버튼</button>
    </div>
  );
  
};

export default Sound;