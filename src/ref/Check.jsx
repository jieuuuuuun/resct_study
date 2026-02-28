import React, { useRef } from "react";

const Check = () => {
  //아이디, 비빌번호 버튼을 눌렀을 때 유효성 검사
  const expressionRef = useRef([])
  const formRef = useRef()
  const hendleSubmitOnClick = () => {
    for(let input of expressionRef.current){
       if(!input.value) {
        // console.error(`${input.name}의 값이 없습니다.`)
        alert(`${input.name}의 값이 없습니다.`)
        // 값이 없을 경우에 먼저 예외 처리하는 것 얼리 리턴/ 함수 종료 return
        return;
       }
      }
      //데이터 전송 포문에서 한 번이라도 return만나면 submit되면 안된다. 
      formRef.current.submit()
  }
  return (
    <div>
      <form action="" ref={formRef}>
        <div>
          <span>아이디</span><input ref={(el) =>{expressionRef.current[0] = el}} type="text" name="id" />
        </div>
        <div>
          <span>비밀번호</span><input ref={(el) => {expressionRef.current[1] = el}} type="text" name="password" />
        </div>
        <button type="button" onClick={hendleSubmitOnClick}>완료</button>
      </form>
    </div>
  );
};

export default Check;
