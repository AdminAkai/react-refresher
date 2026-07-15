import styles from './NewPost.module.css';

const NewPostEnum = { body: 'body', author: 'author'}

const NewPost = ({ newPost, onPostBodyChange, onPostAuthorChange, onCancel, onSubmit }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <p>
      <label htmlFor='body'>Text</label>
      <textarea 
        id='body'
        required
        rows={3}
        value={newPost.body}
        onChange={(e) => onPostBodyChange(NewPostEnum.body, e.target.value)}
      />
    </p>
    <p>
      <label htmlFor='name'>Your name</label>
      <input 
        type='text'
        id='name'
        required
        value={newPost.author}
        onChange={(e) => onPostAuthorChange(NewPostEnum.author, e.target.value)}
      />
    </p>
    <p className={styles.actions}>
      <button type="button" onClick={onCancel}>Cancel</button>
      <button>Submit</button>
    </p>
  </form>
);

export default NewPost;
