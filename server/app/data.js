import _ from "lodash";
import { google } from "googleapis";

const sheets = google.sheets({
  version: "v4",
  auth: process.env.GOOGLE_SHEET_KEY,
});

const spreadsheetId = "14ceZCncQGpndd8hmJwX8SrhVBFFUl41st0XFeWmSWXE";

const parseRow = rows => {
  const results = [];

  _.forEach(rows, row => {
    if (!row[0] || !row[4] || row[3].includes("要分案")) return;
    if (row[6] === "要分案一不納入計算或製作單獨頁面") console.log(row);

    results.push({
      id: row[0],
      category: row[1],
      subject: row[2],
      agency: row[3],
      source: row[4],
      reply: row[6],
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
  app.get("/data/rows", async (req, res) => {
    res.json({ data: await fetch() });
  });

  app.get("/data/results", async (req, res) => {
    const rows = await fetch();
    res.json({ data: _.countBy(rows, "reply") });
  });

  app.get("/data/results/:agency", async (req, res) => {
    const rows = _.filter(await fetch(), ["agency", req.params.agency]);
    res.json({ data: _.countBy(rows, "reply") });
  });
};