import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Tanstack01 = () => {
  // https://jsonplaceholder.typicode.com/posts

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!response.ok) throw new Error('getPosts fetching error')
    const datas = await response.json()
    return datas
  }

  // get 요청
  // 비동기 요청, 로딩 상태, 에러 상태, 캐싱을 모두 자동관리하며 사이드이팩트를 대신 처리한다.
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  const postList = data?.map(({title}, i) => (
    <li key={i}>{title}</li>
  ))

  if(isLoading) return <p>로딩 중....</p>
  if(isError) return <p>알 수 없는 에러 발생{error.message}</p>
  
  return (
    <ul>
      <button onClick={() => {
        refetch().then((res) => {console.log(`재요청 결과: ${res}`)})
      }}></button>
      {postList}
    </ul>
  );
};

export default Tanstack01;