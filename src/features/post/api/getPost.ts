import axios from "axios";
import { ApiClient } from "../../../lib/api-client";
import { PostType } from "../../../models/Post";

/* TODO: repository層に移行 */
export const getPosts = async (): Promise<PostType[]> => {
  const result = await ApiClient.get(`/posts`);
  return result.data;
};

export const getPost = async (id: number): Promise<PostType> => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return result.data;
};
