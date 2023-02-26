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
    getAll: async (): Promise<PostType[]> => {
      const response = await repository.getPosts();
      // mockデータを挿入したい場合
      // mock
      // const response = [
      //   {
      //     id: 1,
      //     title: "タイトル",
      //     body: "本文",
      //     created_at: "2022-10-09",
      //     updated_at: "2022-10-09",
      //   },
      // ];
      return response;
    },
  };
};
