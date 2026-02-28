import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostContainer = () => {

  //https://jsonplaceholder.typicode.com/posts
  //타이틀만 모두 출력하기
  const [posts, setPostes] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const datas = await response.json()
      setPostes(datas)

      }
    getPosts()
  }, [])

  const titles = posts.map(({id, title}, i) => (
    <li key={i}>
      <Link to={`/posts/read/${id}`} >{title}</Link>
    </li>
  ))
  
  return (
    <ul>
      {titles}
    </ul>
  );
};

export default PostContainer;