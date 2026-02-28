import React from 'react';
import PropsComponent1 from './PropsComponent1';
import PropsComponent3 from './PropsComponent3';

const Propscontainer = () => {

  const name = "홍길동";
  const age = 22;
  //foodList를 PropsConmponent3.jsx파일을 만들어 props로 값을 넘기고,
  //콘솔에 모든 값을 하나씩 출력하기
  const foodList = ['김치찌개', '된장찌개','고추장찌개']

  return (
    <div>
      <PropsComponent1 name={name} age={age} />
      <PropsComponent3 foodList={foodList}/>
      
    </div>
  );
};

export default Propscontainer;