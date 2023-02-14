  export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const url = `${config.public.baseURL}get_all_cats`
    const { data :categories} = await $fetch(url);
    let cats = categories.categories
    return cats
  });
  