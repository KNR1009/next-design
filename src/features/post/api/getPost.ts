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

export const createPost = async (
  params: Omit<PostType, "id" | "created_at" | "updated_at">
) => {
  await ApiClient.post("/posts", params);
};

export const deletePost = async (id: number) => {
  await ApiClient.delete(`/posts/${id}`);
};
