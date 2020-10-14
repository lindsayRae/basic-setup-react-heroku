import React, {useState, useEffect} from 'react';

import './App.css';
import {API_URL} from './utils/utils';

// custom hook
const usePosts = () => {
  const [post, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async() => {
      const res = await fetch(API_URL)
      const data = await res.json()
      
      setPosts(data)
    }
    fetchPosts()

  }, [])

  return post
}
function App() {

  const posts = usePosts()
  
  return (
    <div className="App">
      {posts.map(post => <h2>{post.title}</h2>)}
    </div>
  );
}

export default App;
