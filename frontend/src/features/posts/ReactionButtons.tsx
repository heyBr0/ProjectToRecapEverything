import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

type ReactionKey = "thumbsUp" | "wow" | "heart" | "rocket" | "coffee";

interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
  reactions: {
    [key in ReactionKey]: number;
  };
}

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }: { post: Post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(
    ([emojiName, emoji]) => {
      return (
        <button
          key={emojiName}
          type="button"
          className="reactionButton"
          onClick={() =>
            dispatch(
              reactionAdded({
                postId: post.id,
                reaction: emojiName as ReactionKey,
              })
            )
          }
        >
          {emoji} {post.reactions[emojiName as ReactionKey]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
