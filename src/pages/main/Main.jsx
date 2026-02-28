import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

  const name = "홍길동"

  return (
    <div>
      메인 페이지!😎
      <div>
        {/* a 사용하지 마라 */}
        <Link to={`/intro?name=${name}`}>인트로 페이지로 이동!</Link>
    </div>
    </div>
  );
};

export default Main;