import React from 'react';
import UnLuckyComponent from './UnLuckyComponent';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
//화면의 동적제어
//age 상수로 나이를 설정한다.(임의)
//19세 초과라면 "입장가능"
// 성인이 아니라면 "입장불가"
// 성인과 관계없이 age가 짝수라면 "당첨"을 출력

const Jsx05 = () => {
  
  const age = 20;
  //const [pass, notPass] = ["입장 가능", "입장불가"]//구조분해할당
  //const luckComponent = <p>{luck}</p>
  //const unLuckyComponent = <p>{unLucky}</p>
  //const passComponent = <p>{pass}</p>
  //const notPassComponent = <p>{notPass}</p>
  //let msg = "";
  const isAdult = age > 19;
  const isLucky = age % 2 === 0;

   /* if(age%2 === 0){
      msg = "당첨"
    } else if (age>=19){
      msg =  "입장가능"
    } else {
      msg = "입장불가";
    }*/
   const enter = isAdult ? <PassComponent /> : <NotPassComponent />
   const win = isLucky ? <LuckyComponent /> : <UnLuckyComponent />
  return (
    <div>
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;