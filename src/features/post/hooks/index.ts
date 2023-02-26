// hooks
import { useState } from "react";
import { useAsync } from "react-use";
import { postFactory, PostType } from "../../../models/post_model";

// api
import { getPosts } from "../api/getPost";
// types

/* 責務: postsのAPI通信をしデータをstateに格納しておく */
export const useFetchPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useAsync(async () => {
    try {
      const data = await postFactory().getAll();
      setPosts(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return {
    posts: posts,
    isFetching: isFetching,
  };
};
