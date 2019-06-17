type Response = {
  data: ReadonlyArray<Track>;
};

export const search = async (query: string) => {
  const result = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}&limit=3`
  );
  const json = (await result.json()) as Response;
  return json.data;
};
