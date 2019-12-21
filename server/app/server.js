import http from "http";
import express from "express";
import healthz from "./healthz";
import web from "./web";
import requisition from "./requisition";

export const app = express();
const server = http.createServer(app);

[healthz, requisition, web].forEach(service => service({ app, server }));

export default server;
