import { useEffect, useState } from 'react'
import { getPosts } from 'src/api'

export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts } = await getPosts();
        setPosts(posts);
      } catch(err) {
        console.error('Something went wrong fetching posts');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [])

  return [posts, setPosts, isLoading]
}