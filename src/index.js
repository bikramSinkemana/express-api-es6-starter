import express from "express";
import bodyParser from "body-parser";

import routes from "./routes";

const app = express();

const APP_PORT = "3000";
const APP_HOST = "0.0.0.0";

app.set("port", APP_PORT);
app.set("host", APP_HOST);

app.use(bodyParser.json());

// API Routes
app.use("/api", routes);

app.listen(app.get("port"), app.get("host"), () => {
  console.log(
    `Server started at http://${app.get("host")}:${app.get("port")}/api`
  );
});

// Catch unhandled rejections
process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection", err);

  process.exit(1);
});

// Catch uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception", err);

  process.exit(1);
});

export default app;
