
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

interface PostAuthorProps {
    userId: string;
  }

const PostAuthor = ({ userId }:PostAuthorProps) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <span>by {author ? author.name : "Unknown author"}</span>;
};


export default PostAuthor;
