import { useMemo } from 'react'

import Post from 'src/components/Post';

import styles from './PostsList.module.css';


const PostsList = ({ posts }) => {
  const memoizedPosts = useMemo(() => 
    posts 
      ? 
      posts.map(({ author, body }, i) => <Post author={author} body={body} key={`${i}-author-body`} />)
      :
      null,
  [posts])

  return (
    <ul className={styles.posts}>
      {memoizedPosts}
    </ul>
  )
}

export default PostsList;
