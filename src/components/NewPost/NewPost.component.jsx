import classes from './NewPost.module.css';

const NewPostEnum = { body: 'body', author: 'author'}

const NewPost = ({ onPostBodyChange, onPostAuthorChange }) => (
  <form className={classes.form}>
    <p>
      <label htmlFor='body'>Text</label>
      <textarea id='body' required rows={3} onBlur={(e) => onPostBodyChange(NewPostEnum.body, e.target.value)} />
    </p>
    <p>
      <label htmlFor='name'>Your name</label>
      <input type='text' id='name' required onBlur={(e) => onPostAuthorChange(NewPostEnum.author, e.target.value)} />
    </p>
  </form>
);

export default NewPost;
