import React from 'react';

const Detail = () => {
  return (
    <div>
      {/* 
        method='get'
        파라미터를 쿼리스트링으로 전송한다.
      */}
      {/* 
        1. 이름과 나이를 /introduce, Introduce로 보내고
        2. 이름과 나이, 만나이를 화면에 출력하시요.
      */}
      <form action="/introduce" method='get'>
        <div><span>이름</span><input type="text" name='name'/></div>
        <div><span>나이</span><input type="text" name='age'/></div>
        <button>양식 제출</button>
      </form>
    </div>
  );
};

export default Detail;