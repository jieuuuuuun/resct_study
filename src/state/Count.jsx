import React, { useState } from 'react';

const Count = () => {

  console.log(useState())
    //  [변수, setter] = useState("초기값")
  let [number, setNumber] = useState(0);

  console.log("number", number)
  console.log("setNumber", setNumber)

  // 상태를 바꾸는 React의 Hook함수
  //setter를 이용해야 변경할 수 있다.
  //1.selector -> DOM API
  //2.addEventListner
  //3.+=, -=

  const decrease = () => {setNumber(number - 1)}
  const increase = () => {setNumber(number + 1)}
  return (
    <div>
      <button id="subtract" onClick={decrease}>-1</button>
      {number}
      <button id="sum" onClick={increase}>+1</button>
    </div>
  );
};

export default Count;