import http from "http";
import express from "express";
import healthz from "./healthz";
import web from "./web";

export const app = express();
const server = http.createServer(app);

[healthz, web].forEach(service => service({ app, server }));

export default server;
