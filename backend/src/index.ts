import express from "express";
import { connection } from "./connect";
import { consults } from "./consults/";
import cors from 'cors'
const app = express();
const server = require("http").Server(app);
app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
app.use("/", consults);

server.listen(3030, () => {
  console.log("Server funcionando en puerto 3030!");
});

