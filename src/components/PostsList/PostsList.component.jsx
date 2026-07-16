import { useMemo, use } from 'react'

import Post from 'src/components/Post';

import styles from './PostsList.module.css';


const PostsList = ({ postsPromise }) => {
  const { posts } = use(postsPromise)
  
  const memoizedPosts = useMemo(() => 
    posts && posts.length !== 0
      ? 
        (
          <ul className={styles.posts}>
            {posts.map(({ author, body }, i) => <Post author={author} body={body} key={`${i}-author-body`} />)}
          </ul>
        )
      :
        (
          <div className={styles.empty}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        ),
  [posts])

  return memoizedPosts
}

export default PostsList;
