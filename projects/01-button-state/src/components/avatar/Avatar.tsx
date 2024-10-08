import "./Avatar.css";

export const Avatar = ({ src }: { src: string }) => {
  return <img className="tw-followCard-avatar" src={src}></img>;
};
