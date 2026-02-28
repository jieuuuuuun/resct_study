import React from 'react';

const PropsComponent1 = (props) => {
  console.log(props)
  const name = props.name//마침표 접근법
  const age = props['age']//대관호 접근법

  return (
    <div>
      {name}님 환영합니다. {age + 1}살이 되시겠네요^^?
    </div>
  );
};

export default PropsComponent1;