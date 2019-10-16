import axios from "axios";
import ServerHub from "../server";

ServerHub.listen();

const baseURL = `http://127.0.0.1:${ServerHub.address().port}/`;

const station = axios.create({ baseURL });

describe("healthz", () => {
  afterAll(async () => {
    await new Promise(res => ServerHub.close(res));
    await new Promise(res => setTimeout(res));
  });

  it("successfully get healthz", async () => {
    const { data } = await station.get("/healthz");
    expect(data).toBe("All systems operational");
  });
});
