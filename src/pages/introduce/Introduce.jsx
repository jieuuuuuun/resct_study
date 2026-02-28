import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Introduce = () => {
  const [searchParams] = useSearchParams()
  const name = searchParams.get("name")
  const age = searchParams.get("age")

  console.log(name);
  console.log(age);
  
  return (
    <div>
      Introduce페이지
      <p>{name}님의 나이는{age}살, 만 나이는 {age - 1}</p>
    </div>
  );
};

export default Introduce;