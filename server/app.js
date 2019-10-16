import "@babel/polyfill";
import server from "./app/server";

const PORT = process.env.NODE_PORT || process.env.PORT || 8080;

server.listen(PORT, err => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log(`> Ready on http://localhost:${PORT}`);
});
