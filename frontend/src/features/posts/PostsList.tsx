import { useSelector } from "react-redux";
import {selectAllPosts} from "./postsSlice"

type Post = {
  id: string;
  title: string;
  content: string;
};

type RootState = {
  posts: Post[];
};

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id} className="Article">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <div>   
      {renderedPosts}
    </div>
  );
};

