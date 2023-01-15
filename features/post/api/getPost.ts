import axios from "axios";
import { PostType } from "../types";

export const getPosts = async (): Promise<PostType[]> => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`,
    {}
  );
  return result.data;
};

export const getPost = async (id: number): Promise<PostType> => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return result.data;
};
