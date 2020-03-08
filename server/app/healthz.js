import cors from "cors";

export default ({ app }) => {
  app.get("/healthz", cors(), (req, res) => {
    res.status(200).send("All systems operational");
  });
};
