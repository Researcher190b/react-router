import PostsList from "./postsList";
import Post from "./post";

const Posts = ({ match }) => {
  const posts = [
    { id: 1, label: "post 1" },
    { id: 1, label: "post 2" },
    { id: 1, label: "post 3" },
  ];

  const postId = match.params.postsId;
  const display = match.params.display;
  return (
    <>
      {postId ? (
        <>
          {display && <h2>{display}</h2>}
          <Post posts={posts} id={postId} />
        </>
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
