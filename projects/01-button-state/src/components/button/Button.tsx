import "./Button.css";
import { FC, useState } from "react";

export const Button: FC<ButtonProps> = ({ initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const { text, buttonClassName } = isFollowing
    ? {
        text: "Following",
        buttonClassName: "tw-followCard-button is-following",
      }
    : {
        text: "Follow",
        buttonClassName: "tw-followCard-button",
      };

  return (
    <button
      className={buttonClassName}
      onClick={() => setIsFollowing(!isFollowing)}
    >
      <span className="tw-followCard-text"> {text} </span>
      <span className="tw-followCard-stopFollow"> Unfollow </span>
    </button>
  );
};

interface ButtonProps {
  initialIsFollowing: boolean;
}
