import "./Avatar.css";

export const Avatar = ({ src }: Props) => {
  return <img className="tw-followCard-avatar" src={src}></img>;
};

interface Props {
  src: string;
}