import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { IPost } from "@/types.ts";
import { PostsApi } from "@/api";

export const usePostsStore = defineStore("posts", () => {
  const posts: Ref<IPost[]> = ref([]);
  const loading: Ref<boolean> = ref(false);
  const setPosts = (newPosts: IPost[]) => {
    posts.value = newPosts;
  };
  const setLoading = (isLoading: boolean) => {
    loading.value = isLoading;
  };
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data } = await PostsApi.getAll();
      setPosts(data);
    } catch (error) {
      console.error("Ошибка при получении списка постов:", error);
    } finally {
      setLoading(false);
    }
  };
  const deletePost = (id: number) => {
    posts.value = posts.value.filter((post) => post.id !== id);
  };
  return {
    posts,
    loading,
    fetchPosts,
    deletePost,
  };
});
