import express, { json } from "express";
import router from "./routes/index.routes";
import playerRoutes from "./routes/players.routes";

const app = express();

/**
 * Config
 */
app.set("port", process.env.PORT || 5000);

/**
 * Middleware
 */
app.use(json());

/**
 * Routes
 */
app.use(router);
app.use("/players", playerRoutes);

export default app;
