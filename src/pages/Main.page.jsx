import { useState } from 'react';

import MainHeader from 'src/components/MainHeader';
import PostsList from 'src/components/PostsList';
import NewPost from 'src/components/NewPost';
import Modal from 'src/components/Modal';

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({
    body: '',
    author: '',
  });

  console.log(newPost);

  const toggleModal = () => setShowModal(!showModal)

  const onNewPostChange = (postArea, value) => {
    if (value === newPost[postArea]) return;
    setNewPost({ ...newPost, [postArea]: value });
  };

  return (
    <main>
      <MainHeader />
      <Modal toggleModal={toggleModal} showModal={showModal}>
        <NewPost
          onPostBodyChange={onNewPostChange}
          onPostAuthorChange={onNewPostChange}
        />
      </Modal>
      <PostsList />
    </main>
  );
};

export default Main;
