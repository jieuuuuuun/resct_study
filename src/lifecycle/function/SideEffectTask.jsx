import React, { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/todos
// 데이터를 요청해서 화면에 완료하지 못한 할일 목록 중 제목만 li태그로 출력하기

const SideEffectTask = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const datas = await response.json();
      setTodos(datas);
    };
    getTodos();
  }, []);

  const todoList = todos
  .filter(({completed}) => !completed)
  .map(({title}, i) => <li key={i}>{title}</li>)

  return (
  <ul>
    {todoList}
  </ul>
);
};

export default SideEffectTask;
