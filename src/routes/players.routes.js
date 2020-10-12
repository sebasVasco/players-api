import { Router } from "express";

const router = Router();

/**
 * Database connection
 */

import { connect } from "../database";
import { ObjectID } from "mongodb";

router.get("/", async (req, res) => {
  const db = await connect();
  const result = await db.collection("players").find({}).toArray();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db.collection("players").findOne({ _id: ObjectID(id) });
  res.json(result);
});

router.post("/", async (req, res) => {
  const db = await connect();
  const player = req.body;
  const result = await db.collection("players").insertOne(player);
  res.json(result.ops[0]);
});

router.delete("/:id", async (req, res) => {
  const db = await connect();
  const { id } = req.params;
  const result = await db
    .collection("players")
    .deleteOne({ _id: ObjectID(id) });
  res.json({
    message: `Task ${id} deleted`,
    result,
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const newPlayer = req.body;
  const db = await connect();
  const result = await db
    .collection("players")
    .updateOne({ _id: ObjectID(id) }, { $set: newPlayer });
  res.json({
    message: `Task ${id} updated`,
    result,
  });
});

export default router;
