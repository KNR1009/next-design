import { PostType } from "../../models/post_model";
import { PostRepository } from "../post_repository.ts";

const getPosts = async (): Promise<PostType[]> => {
  const response = [
    {
      id: 1,
      title: "a",
      body: "a",
      created_at: "2022-02-01",
      updated_at: " 2022-02-01",
    },
  ];
  return response;
};

const getPost = async (params: Pick<PostType, "id">): Promise<PostType> => {
  const response = {
    id: 1,
    title: "a",
    body: "a",
    created_at: "2022-02-01",
    updated_at: " 2022-02-01",
  };
  return response;
};

const createPost = async (
  params: Omit<PostType, "id" | "created_at" | "updated_at">
) => {};

const deletePost = async (params: Pick<PostType, "id">) => {};

export const mockPostRepository: PostRepository = {
  getPosts,
  getPost,
  createPost,
  deletePost,
};
