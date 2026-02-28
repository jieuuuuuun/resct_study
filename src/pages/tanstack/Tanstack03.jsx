import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';

//무한 스크롤
const Tanstack03 = () => {

    const limit = 10;
    const observerRef = useRef(null)
    
    const getPosts = async ({pageParam}) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${pageParam}&_limit=${limit}`
      )
      if(!response.ok) throw new Error('getPosts fetching error')
      const datas = await response.json()
      return datas
    }

    const {data, 
      fetchNextPage,//다음 페이지 요청
       hasNextPage, //다음 페이지 있는지 여부
       isFetchingNextPage,
      isLoading, isError, error
    } = useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: getPosts,
      getNextPageParam: (lastPage, allPages) => (
        lastPage.length === limit ? allPages.length * limit : undefined
      )
    })
    
    console.log(data);

    useEffect(() => {
      if(!observerRef.current) return;

      //객체 감지
      const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      }, {
        rootMargin:"100px"
      })
      
      const currentRef = observerRef.current
      observer.observe(currentRef)

      return () => {
        observer.unobserve(currentRef)
      }

    }, [data, hasNextPage, fetchNextPage, isFetchingNextPage])
  
    if(isLoading) return <p>로딩중....</p>
    if(isError) return <p>에러발생....</p>
  
  return (
    <div>
      <h1>게시판(무한스크롤)</h1>
      <ul>
        {data?.pages.map((page, pageIndex) => (
          page.map(({title}, i) =>(
            <li key={`${pageIndex}-${i}`}>{title}</li>
          ))
          
        ))}
      </ul>
      <div ref={observerRef} syle={{height:"1px"}}></div>
      {isFetchingNextPage && <p>더 불러오는 중입니다.</p>}
      {!hasNextPage && <p>마지막 페이지입니다.</p>}
    </div>
  );
};

export default Tanstack03;