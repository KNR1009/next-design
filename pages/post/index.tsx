import type { NextPage } from "next";
// components
import { Post } from "../../src/features/post/components/Post";
// hooks
import { useFetchPosts } from "../../src/features/post/hooks";

/* 責務はAPI通信とページの表示 */
const PostPage: NextPage = () => {
  const { posts, isFetching } = useFetchPosts();

  if (isFetching) {
    return <p>ローディング中</p>;
  }
  return <Post posts={posts} />;
};

export default PostPage;
