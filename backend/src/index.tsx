import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB_ADDR as string, {
    dbName: "CoShell",
  })
  .then(() => {
    app.listen(port, () => {
      try {
        console.log(`[server] : Server is running at https:${port}`);
      } catch (e) {
        console.log(e);
      }
    });
  });
