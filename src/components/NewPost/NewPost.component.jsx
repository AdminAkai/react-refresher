import Modal from 'src/components/Modal';

import styles from './NewPost.module.css';
import { Link } from 'react-router-dom';

const NewPostEnum = { body: 'body', author: 'author'}

const NewPost = ({ newPost, onPostBodyChange, onPostAuthorChange, onCancel, onSubmit }) => {

  return (
    <Modal>
      <form className={styles.form} onSubmit={onSubmit}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea 
            id='body'
            required
            rows={3}
            value={newPost?.body}
            onChange={(e) => onPostBodyChange(NewPostEnum.body, e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <input 
            type='text'
            id='name'
            required
            value={newPost?.author}
            onChange={(e) => onPostAuthorChange(NewPostEnum.author, e.target.value)}
          />
        </p>
        <p className={styles.actions}>
          <Link to="/" onClick={onCancel}>Cancel</Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
