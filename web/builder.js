import buildNext from "next/dist/build";
import exportNext from "next/dist/export";
import config from "../next.config";

Promise.resolve()
  .then(() => buildNext(__dirname, config))
  .then(() => exportNext(__dirname, config))
  // eslint-disable-next-line no-console
  .catch(console.error);
