import React, { useRef, useState } from "react";

//심화실습
//사용자가 한국 음식과 영어 음식을 입력하고 추가 버튼을 누르면 추가되어 화면에 출력된다.
//화면에 출력된 음식들은 사용자가 체크박스를 체크하고 삭제버튼을 누르면 삭제한 음식만 삭제된다.

const FoodContainer = () => {
 
  const inputRef = useRef([])
  const [foods, setFoods] = useState([])
  const [checked, setChecked] = useState([])
  //추가
  const handleAddFoodOnClick = () => {
    const kor = inputRef.current[0].value
    const eng = inputRef.current[1].value

    setFoods([...foods,{ kor: kor, eng: eng}])
    setChecked([...checked, false])
  }

  const handleCheckedOnChange = (i) => {
    setChecked(checked.map((c, idx) => (idx === i ? !c : c)))
  }

  const foodList = foods.map(({kor, eng}, i) => (
    <li key={i}>
      <input
        checked={checked[i]}
        type="checkbox"
        onChange={() => {handleCheckedOnChange(i)}}
      />
      {`${kor} (${eng})`}
    </li>
  ))

  const handleRemoveFoodOnClick = () => {
    const newFoods = foods.filter((_, i) => !checked[i])
    setFoods(newFoods)
    setChecked(new Array(newFoods.length).fill(false))
  }

  return (
    <>
    <div>
      <input placeholder="한국 음식 이름" type="text" ref={(el) => {inputRef.current[0] = el}}/>
      <input placeholder="영어 음식 이름" type="text" ref={(el) => {inputRef.current[1] = el}}/>
      <button type="button" onClick={handleAddFoodOnClick}>추가</button>
      <button type="button" onClick={handleRemoveFoodOnClick}>삭제</button>
    </div>
     <ul>
        {foodList}
      </ul>
    </>
  );
};

export default FoodContainer;
