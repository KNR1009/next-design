import Link from "next/link";
import React, { useState } from "react";
import { PostType } from "../../../models/post_model";
import { createPost, deletePost } from "../api/getPost";

type Props = {
  posts: PostType[];
};

/* UIの描画のみ責務を持っている */
export const Post: React.FC<Props> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const onClick = () => {
    createPost({
      title,
      body,
    });
    alert("登録しました");
  };
  return (
    <>
      <div>
        <ul>
          {props.posts.map((i) => (
            <li key={i.id}>
              {i.title}
              <span>
                <button
                  onClick={() => {
                    deletePost(i.id);
                    alert("削除しました");
                  }}
                >
                  削除
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>新規投稿</p>
        <label htmlFor="">タイトル</label>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <br />
        <label htmlFor="">本文</label>
        <textarea
          name=""
          id=""
          cols={30}
          rows={5}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setBody(e.target.value);
          }}
          value={body}
        />
        <button onClick={onClick}>送信</button>
        <Link href={"/"}>戻る</Link>
      </div>
    </>
  );
};
