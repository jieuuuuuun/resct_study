import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tanstack05 = () => {

  const navigate = useNavigate()

  const join = async (member) => {
    const response = await fetch("http://localhost:4000/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(member)
    })

    if(!response.ok) throw new Error("Data Fetching Error")
    const datas = await response.json();
    return datas
  }

  const joinMutation = useMutation({
    mutationFn: join,
    onSuccess: (res) => {
      alert("회원가입 완료")
      navigate("/login")
    }, // then,
    onError: (err) => {

    }, // catch
  })

  return (
    <div>
      <button onClick={() => {
        const member = {
          memberEmail: "test456@gmail.com", 
          memberPassword: "test123!@#", 
          memberName: "장보고"
        }
        joinMutation.mutate(member)
      }}>회원가입</button>
    </div>
  );
};

export default Tanstack05;