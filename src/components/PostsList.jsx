import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Jenny" body="A cute writer with the bright mindset." />
        <Post author="Kook" body="Who wrote about musics and the notes." />
        <Post author="JK" body="More than a writer... Public speaker." />
      </ul>
    </>
  );
}

export default PostsList;
