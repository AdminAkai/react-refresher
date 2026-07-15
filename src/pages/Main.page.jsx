import { useState } from 'react';

import PostsList from 'src/components/PostsList';
import NewPost from 'src/components/NewPost';

const Main = () => {
  const [newPost, setNewPost] = useState({
    body: '',
    author: '',
  });

  console.log(newPost);

  const onNewPostChange = (postArea, value) => {
    if (value === newPost[postArea]) return;
    setNewPost({ ...newPost, [postArea]: value });
  };

  return (
    <main>
      <NewPost
        onPostBodyChange={onNewPostChange}
        onPostAuthorChange={onNewPostChange}
      />
      <PostsList />
    </main>
  );
};

export default Main;
