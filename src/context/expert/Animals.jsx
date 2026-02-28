import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

//실습
//context에 저장된 동물 세 마리를 버튼으로 출력하기
//input에 동물을 입력 후 엔터를 누르면 동물 버튼이 추가된다.
//동물 버튼을 클릭하면 해당 버튼이 삭제된다.
//추가, 삭제는 context에서 제공하는 insert(), remove()를 사용해야한다.
const Animals = () => {
  const {state, actions} = useContext(AnimalsContext)
  const {insert, remove} = actions
  
  console.log(state);

  const buttons = state.animals.map((animal, i) => (
    <li key={i}>
      <button onClick={() => remove(i)}>{animal}</button>
    </li>
  ))
  
  const handleAddAnimalOnKeyDown = (e) => {
    if(e.key === "Enter"){
      insert(e.target.value)
    }
  }

  return (
    <div>
      <input type="text" onKeyDown={handleAddAnimalOnKeyDown}/>
      <ul>
        {buttons}
      </ul>
    </div>
  );
};

export default Animals;