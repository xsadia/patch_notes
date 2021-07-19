import { useQuery, UseQueryOptions } from "react-query";
import { api } from "services/api";

type User = {
  _id: string;
  username: string;
};

type Post = {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  user: User;
  createdAt: string;
};
//temp
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjY2NDAzMTgsImV4cCI6MjQ5MDU1MzkxOCwic3ViIjoiNjBmNDgzMzUwOTYwNzQyNjA4OTMyNWNlIn0.9z_-BtrAyIHiXhmX_6xCyeAv3VKVhvbVvguIteI77lc";

export async function getPosts(page: number): Promise<Post[]> {
  const response = await api.get(`/posts?page=${page}&limit=5`);

  return response.data;
}

export function usePosts(options: UseQueryOptions, page: number) {
  return useQuery('posts', () => getPosts(page), {
    staleTime: 1000 * 10,
    ...options
  });
}