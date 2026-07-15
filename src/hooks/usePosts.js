import { useEffect, useState } from 'react'
import { getPosts } from 'src/api'

export const usePosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await getPosts();
      setPosts(posts);
    }

    fetchPosts();
  }, [])

  return [posts, setPosts]
}