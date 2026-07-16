import { Link, Form } from 'react-router-dom';

import Modal from 'src/components/Modal';

import styles from './NewPost.module.css';

const NewPost = () => (
  <Modal>
    <Form method='post' className={styles.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea 
          id='body'
          required
          rows={3}
          name='body'
        />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input 
          type='text'
          id='name'
          required
          name='author'
        />
      </p>
      <p className={styles.actions}>
        <Link to="/" type='button'>Cancel</Link>
        <button>Submit</button>
      </p>
    </Form>
  </Modal>
);

export default NewPost;
