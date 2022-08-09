export default async function useBreeds() {
  const { data, error } = await useAsyncData('breeds', () => GqlBreeds());
  if(error.value) {
    console.error(error.value)
  }

  return {
    data
  }
}