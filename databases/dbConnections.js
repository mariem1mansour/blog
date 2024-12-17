import mongoose from "mongoose";

function dbConnections() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/blog")
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("error db :", err);
    });
}
export default dbConnections;
