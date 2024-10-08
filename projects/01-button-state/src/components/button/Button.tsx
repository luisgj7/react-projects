import "./Button.css";
import { useState } from "react";

export const Button = ({
  initialIsFollowing,
}: {
  initialIsFollowing: boolean;
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const { text, buttonClassName } = isFollowing
    ? {
        text: "Following",
        buttonClassName: "tw-followCard-button is-following",
      }
    : { 
        text: "Follow", 
        buttonClassName: "tw-followCard-button" 
    };

  const handleClick = () => setIsFollowing(!isFollowing);

  return (
    <button className={buttonClassName} onClick={handleClick}>
      <span className="tw-followCard-text"> {text} </span>
      <span className="tw-followCard-stopFollow"> Unfollow </span>
    </button>
  );
};
