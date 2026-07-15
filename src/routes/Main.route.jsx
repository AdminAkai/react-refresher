import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// import MainHeader from 'src/components/MainHeader';
import PostsList from 'src/components/PostsList';
import NewPost from 'src/components/NewPost';
// import Modal from 'src/components/Modal';
import Loading from 'src/components/Loading';

import { postsUrl } from 'src/api';
import { usePosts } from 'src/hooks';


export const Main = () => {
  const [posts, setPosts, isLoading] = usePosts();

  const [newPost, setNewPost] = useState({
    body: '',
    author: '',
  });

  const onNewPostChange = (postArea, value) => {
    if (value === newPost[postArea]) return;
    setNewPost({ ...newPost, [postArea]: value });
  };

  const onCancelNewPost = () => {
    setNewPost({ body: '', author: '' })
    setShowModal(false)
  }

  const onSubmitNewPost = (e) => {
    fetch(postsUrl, {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts(prevPosts => {
      const newPosts = Array.from(prevPosts)
      newPosts.unshift(newPost)
      e.preventDefault();
      return newPosts
    })
    setNewPost({ body: '', author: '' })
    setShowModal(false)
  }

  return (
    <main>
      <Outlet />
      {/* <MainHeader onCreatePost={setShowModal} /> */}
      {/* <Modal toggleModal={toggleModal} showModal={showModal}> */}
      {/* <NewPost
        newPost={newPost}
        onPostBodyChange={onNewPostChange}
        onPostAuthorChange={onNewPostChange}
        onCancel={onCancelNewPost}
        onSubmit={onSubmitNewPost}
      /> */}
      {/* </Modal> */}
      {isLoading ? 
          <Loading />
        :
          <PostsList posts={posts} />
      }
    </main>
  );
};