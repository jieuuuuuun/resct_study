import React from 'react';
import Todo from './Todo';

const TodoContainer = () => {
  //할일 목록 중 완료하지 않은 목록만 화면에 타이틀을 출력하기
  //todo 컴포넌트로 분리하기

  const toDos = [
    {
      title: "코딩 게임",
      isComplete: true
    },
    {
      title: "수기 코딩",
      isComplete: false
    },
    {
      title: "코딩 복습",
      isComplete: true
    },
    {
      title: "꿈속에서 복습",
      isComplete: false
    },
    {
      title: "씻으면서 복습",
      isComplete: true
    },
  ]
  const isComplete = ({isComplete}) => !isComplete
  const changeTodo = ({title}, i) => <Todo key={i} title={title} i={i} />
  
  const todoList = toDos
  .filter(isComplete)
  .map(changeTodo)

  return (
    <div>
      {todoList}
    </div>
  );
};

export default TodoContainer;