import { useState } from 'react';

import MainHeader from 'src/components/MainHeader';
import PostsList from 'src/components/PostsList';
import NewPost from 'src/components/NewPost';
import Modal from 'src/components/Modal';

const Main = () => {
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({
    body: '',
    author: '',
  });

  const toggleModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(!showModal);
    }
  }

  const onNewPostChange = (postArea, value) => {
    if (value === newPost[postArea]) return;
    setNewPost({ ...newPost, [postArea]: value });
  };

  const onCancelNewPost = () => {
    setNewPost({ body: '', author: '' })
    setShowModal(false)
  }

  const onSubmitNewPost = (e) => {
    e.preventDefault();
    setPosts(prevPosts => {
      const newPosts = Array.from(prevPosts)
      newPosts.push(newPost)
      return newPosts
    })
    setNewPost({ body: '', author: '' })
    setShowModal(false)
  }

  return (
    <main>
      <MainHeader onCreatePost={setShowModal} />
      <Modal toggleModal={toggleModal} showModal={showModal}>
        <NewPost
          newPost={newPost}
          onPostBodyChange={onNewPostChange}
          onPostAuthorChange={onNewPostChange}
          onCancel={onCancelNewPost}
          onSubmit={onSubmitNewPost}
        />
      </Modal>
      <PostsList posts={posts} />
    </main>
  );
};

export default Main;
