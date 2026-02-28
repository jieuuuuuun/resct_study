import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

// 페이지 네이션
const Tanstack02 = () => {

  const [page, setPage] = useState(0)
  const limit = 10;
  
  const getPosts = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${page * limit}&_limit=${limit}`
    )
    if(!response.ok) throw new Error('getPosts fetching error')
    const datas = await response.json()
    return datas
  }

  const {data, isLoading, isError, error, isFetching} = useQuery({
    queryKey: ['posts', page],
    queryFn: getPosts,
    keepPreviousData: true
  })

  // 첫 페이지 여부 판단
  const isFirstPage = page === 0

  // 다음 페이지 존재 여부
  const hasNextPage = data?.length - 1 === page

  const postList = data?.map(({title}, i) => (
    <li key={i}>{title}</li>
  ))

  if(isLoading) return <p>로딩중...</p>
  if(isError) return <p>에러발생!</p>

  return (
    <div>
      <h1>게시글 목록 (페이지 {page + 1})</h1>
      <ul>
        {postList}
      </ul>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={isFirstPage}>이전</button>
        <button onClick={() => setPage(page + 1)} disabled={hasNextPage}>다음</button>
      </div>
    </div>
  );
};

export default Tanstack02;