export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { catId } = event.context.params;
  const url = `${config.public.baseURL}/properties?cat=${catId}`;
  const { data } = await $fetch(url, {
    headers: {
      "private-key": `3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16`,
    },
  });
  return data
});
