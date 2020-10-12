import MongoClient from "mongodb";

export const connect = async () => {
  try {
    const client = await MongoClient.connect("mongodb://localhost", {
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
    return client.db("nba-players-api");
  } catch (error) {
    console.log(error);
  }
};
