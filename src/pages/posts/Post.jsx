import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Post = () => {

  const {id} = useParams()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await response.json()
      setPost(data)
    }

    getPosts()
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        setLoading(true)
      })
  }, [])

  if(loading) return <p>로딩중...☺️</p>

  return (
    <div>
      <p>
        제목: {post.title}
      </p>
      <p>
        내용: {post.body}
      </p>
      <Link to={"/posts"}>목록으로</Link>
    </div>
  );
};

export default Post;