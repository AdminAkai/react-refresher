import styles from './PostsList.module.css';

import Post from 'src/components/Post';

const PostsList = () => (
  <ul className={styles.posts}>
    <Post author='test' body='test' />
  </ul>
);

export default PostsList;
