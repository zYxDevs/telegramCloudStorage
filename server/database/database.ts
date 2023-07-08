export { registerUser, loginUser } from "./user";
export { listFolder } from "./folder";

import mongoose from "mongoose";

export const MONGO_URL = `${process.env.mongoUrl}`;

export const connect = () => {
  console.log("Connecting to DB...");
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Connected to DB"))
    .catch((e) => console.log(e));
};
