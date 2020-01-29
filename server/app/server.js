import http from "http";
import express from "express";
import healthz from "./healthz";
import web from "./web";
import data from "./data";
import requisition from "./requisition";

export const app = express();
const server = http.createServer(app);

[healthz, data, requisition, web].forEach(service => service({ app, server }));

export default server;
