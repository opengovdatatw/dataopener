import next from "next";

const { NODE_ENV, NODE_WATCH_WEB } = process.env;

export default ({ app }) => {
  if (NODE_ENV === "test") return;

  const dev = Boolean(NODE_WATCH_WEB);
  const web = next({
    dir: "./web/",
    dev,
    conf: { poweredByHeader: false },
  });
  const handler = web.getRequestHandler();

  app.get("/agencies/:name", (req, res) => {
    return web.render(req, res, "/agencies", { name: req.params.name });
  });

  app.get("*", (req, res) => handler(req, res));

  web.prepare();
};
