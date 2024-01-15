import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { IBreadcrumb } from "@/types.ts";

export const useBreadcrumbsStore = defineStore("breadcrumbs", () => {
  const items: Ref<IBreadcrumb[]> = ref([]);
  const setBreadcrumbs = (breadcrumbs: IBreadcrumb[]) => {
    items.value = breadcrumbs;
  };
  const resetBreadcrumbs = () => {
    items.value = [];
  };
  return {
    breadcrumbs: items,
    setBreadcrumbs,
    resetBreadcrumbs,
  };
});
