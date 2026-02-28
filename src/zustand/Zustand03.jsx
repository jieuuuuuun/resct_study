import React from 'react';
import useAuthStore from '../store/useAuthStore';

const Zustand03 = () => {
  const {currentUser, isLogin, setCurrentUser, setIsLogin} = useAuthStore()
  
  const login = () => {
    setCurrentUser({
      name:"장보고"
    })
    setIsLogin(true)
  }

  const logout = () => {
    setCurrentUser({
      name:"홍길동"
    })
    setIsLogin(false)
  }
  return (
    <div>
      <h1>이름 : {currentUser?.name}</h1>
      <h2>로그인 상태 : {isLogin.toString()}</h2>
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default Zustand03;