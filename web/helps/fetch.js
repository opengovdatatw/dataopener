import axios from "axios";

const cache = new Map();

export default async function fetch(url) {
  if (cache.has(url)) return cache.get(url);

  const handler = (async () => {
    const response = await axios(url);
    return response.data.data;
  })();
  cache.set(url, handler);
  return handler;
}
