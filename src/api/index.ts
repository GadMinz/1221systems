import axios from "axios";
import { IPost, IUser } from "@/types.ts";

axios.defaults["baseURL"] = "https://jsonplaceholder.typicode.com/";

export const PostsApi = {
  async getAll() {
    return await axios.get<IPost[]>("/posts");
  },
  async getOne(id: number) {
    return await axios.get<IPost>(`/posts/${id}`);
  },
};

export const UsersApi = {
  async getInfo(id: number) {
    return await axios.get<IUser>(`/users/${id}`);
  },
};
