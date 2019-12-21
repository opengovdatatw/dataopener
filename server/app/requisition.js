export default ({ app }) => {
  app.get("/r/:data", (req, res) => {
    const { data } = req.params;
    res.redirect(`/r?data=${data}`);
  });
};
