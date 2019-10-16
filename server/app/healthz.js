export default ({ app }) => {
  app.get("/healthz", (req, res) => {
    res.status(200).send("All systems operational");
  });
};
