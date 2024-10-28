import "./Card.css";
import { Avatar } from "../avatar/Avatar";
import { Button } from "../button/Button";
import { FC } from "react";

export const Card: FC<CardProps> = ({ username, name, isFollowing, avatarUrl }) => {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <Avatar src={avatarUrl}></Avatar>
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName"> @{username} </span>
        </div>
      </header>

      <aside>
        <Button initialIsFollowing={isFollowing}></Button>
      </aside>
    </article>
  );
};

export interface CardProps {
  username: string;
  name: string;
  isFollowing: boolean;
  avatarUrl: string;
}
