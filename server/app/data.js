import _ from "lodash";
import cors from "cors";
import { google } from "googleapis";
import datasets from "../../datasets.json";

const sheets = google.sheets({
  version: "v4",
  auth: "AIzaSyCeqGz1Nbe-LXG4SslNXchw0lAnj4fcZKs",
});

const spreadsheetId = "14ceZCncQGpndd8hmJwX8SrhVBFFUl41st0XFeWmSWXE";

const parseRow = rows => {
  const results = [];

  _.forEach(rows, row => {
    if (!row[0] || !row[4] || row[3].includes("要分案")) return;
    if (row[6] === "要分案一不納入計算或製作單獨頁面") console.log(row);

    results.push({
      id: row[1],
      category: row[2],
      subject: row[3],
      agency: row[4],
      source: row[5],
      postedAt: row[0],
      reply: _.replace(row[7], /^\w\. /, ""),
      tags: row.slice(8).filter(s => s.length),
    });
  });

  return results;
};

let cache = null;

async function fetch() {
  if (cache) return cache;

  const results = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "A3:M3408",
  });
  cache = parseRow(results.data.values);
  return cache;
}

export default ({ app }) => {
  app.get("/api/datasets", cors(), async (req, res) => {
    res.json(datasets);
  });

  app.get("/api/requests", cors(), async (req, res) => {
    res.json({ data: await fetch() });
  });

  app.get("/api/requests/count-by-:field", cors(), async (req, res) => {
    const rows = await fetch();
    res.json({ data: _.countBy(rows, req.params.field) });
  });

  app.get("/api/requests/group-by-agency/:agency", cors(), async (req, res) => {
    const rows = _.filter(await fetch(), ["agency", req.params.agency]);
    res.json({ data: _.countBy(rows, "reply") });
  });
};
