import { useState } from "react";
import classes from "./NewPost.module.css"

function NewPost({onCancel, onAddPost}) {

    const [enteredAuthorText, setEnteredAuthorText] = useState('');
    const [enteredBodyText, setEnteredBodyText] = useState('');

    function authorChangeHandler(event) {
        setEnteredAuthorText(event.target.value);
    }

    function bodyChangeHandler(event) {
        setEnteredBodyText(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            author: enteredAuthorText,
            body: enteredBodyText
        };
        onAddPost(postData);
        onCancel();
    }
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </div>
      </form>
    );
  }
  
  export default NewPost;