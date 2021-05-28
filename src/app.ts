import "reflect-metadata"
import * as dotenv from "dotenv";
import express from "express"
import cors from "cors";
import morgan from "morgan"
import { resolve } from "path"
import { createExpressServer } from 'routing-controllers';
dotenv.config({ path: resolve(__dirname, '../.env') });
const app: express.Application = createExpressServer({
  defaultErrorHandler: false,
  classTransformer: true,
  routePrefix: "/api",
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true,
  },
  middlewares: [resolve(__dirname, "./middlewares/*{.ts,.js}")],
  controllers: [resolve(__dirname, "./controllers/*{.ts,.js}")], // we specify controllers we want to use
});

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan('dev'));

export default app;
