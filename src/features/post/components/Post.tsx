import React from "react";
import { PostType } from "../types";

type Props = {
  posts: PostType[];
};

/* UIの描画のみ責務を持っている */
export const Post: React.FC<Props> = (props) => {
  return (
    <div>
      <ul>
        {props.posts.map((i) => (
          <li key={i.id}>{i.title}</li>
        ))}
      </ul>
    </div>
  );
};
