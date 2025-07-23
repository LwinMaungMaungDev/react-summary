import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [enteredAuthor, setEnteredAuthor] = useState();
  const [enteredBody, setEnteredBody] = useState();

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onAuthorChange={changeAuthorHandler}
            onBodyChange={changeBodyHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Jenny" body="A cute writer with the bright mindset." />
        <Post author="Kook" body="Who wrote about musics and the notes." />
        <Post author="JK" body="More than a writer... Public speaker." />
      </ul>
    </>
  );
}

export default PostsList;
