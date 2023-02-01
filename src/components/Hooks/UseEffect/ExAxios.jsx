import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../../../../../my-app/src/component/Card/card';

function ExAxios() {
  const [posts,setPosts] = useState([]);
  const [id,setId] = useState(1);
  useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      setPosts(res.data);  
      // console.log(res)
    }).catch(err => console.log(err))},[id])
  return (
    <div>
       {/* <input type = 'text' value = {id} onChange={e => setId(e.target.value)}/>
      <div>{posts.title}</div>
      <ul>
        {posts.map(post=><li key = {post.id}>{post.title}</li> )}
      </ul>  */}
      <Card ></Card>
    </div>
  )
}export default ExAxios
