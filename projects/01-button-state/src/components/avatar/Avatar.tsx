import "./Avatar.css";
import { FC } from "react";

export const Avatar: FC<{ src: string }> = ({ src }) => {
  return <img className="tw-followCard-avatar" src={src}></img>;
};
