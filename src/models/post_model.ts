import {
  postRepository,
  PostRepository,
} from "../repositories/post_repository.ts";

export type PostType = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};

export const postFactory = (rep?: PostRepository) => {
  // repositoryが入っていたら本番
  const repository = rep ?? postRepository;
  return {
    index: async (): Promise<PostType[]> => {
      const response = await repository.getPosts();
      return response;
    },
  };
};
