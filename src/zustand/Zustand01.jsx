import React from 'react';
import useCountStore from '../store/useCountStore';
import { Link } from 'react-router-dom';

const Zustand01 = () => {
  //useContext
  const {increase, decrease} = useCountStore()
  
  return (
    <div>
      <button onClick={increase}>+1 증가</button>
      <button onClick={decrease}>-1 증가</button>
      <Link to={"/zustand/02"}>02로 이동</Link>
    </div>
  );
};

export default Zustand01;