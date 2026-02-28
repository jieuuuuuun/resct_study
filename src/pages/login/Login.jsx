import React from 'react';
import { get, useForm } from 'react-hook-form';
import S from './style';

const Login = () => {

  const { register, handleSubmit, getValues, formState: { errors, isSubmitted, isSubmitting }} = useForm({mode:"onChange"})

  const login = handleSubmit((data) => {
    // fetch
    console.log(data)
  })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
  console.log(errors)

  return (
    <div>
      <form onSubmit={login}>   
        <S.Label>
          <p>이메일</p>
          <input 
            type="text" 
            placeholder='이메일을 입력하세요'
            {...register("memberEmail", {
              required: true,
              pattern: {
                value: emailRegex
              }
            })}
          />
        {errors && errors?.memberEmail?.type === "required" && (
          <S.ErrorMessage>이메일을 입력하세요.</S.ErrorMessage>
        )}
        {errors && errors?.memberEmail?.type === "pattern" && (
          <S.ErrorMessage>이메일 양식에 맞게 입력하세요.</S.ErrorMessage>
        )}
        </S.Label>

        <S.Label>
          <p>비밀번호</p>
          <input 
            type="password" 
            placeholder='이메일을 입력하세요'
            {...register("memberPassword", {
              required: true,
              pattern: {
                value: passwordRegex
              }
            })}
          />
        {errors && errors?.memberPassword?.type === "required" && (
          <S.ErrorMessage>비밀번호를 입력하세요.</S.ErrorMessage>
        )}
        {errors && errors?.memberPassword?.type === "pattern" && (
          <S.ErrorMessage>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다.</S.ErrorMessage>
        )}
        </S.Label>

        <button disabled={isSubmitting}>로그인</button>
      </form>
    </div>
  );
};

export default Login;