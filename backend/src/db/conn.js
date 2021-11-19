const express = require("express");

const mongoose = require("mongoose");
//mongodb+srv://hackathon:hackathon@cluster0.qh53e.mongodb.net/hackathon?retryWrites=true&w=majority
const app = express();
const connect = () => {
  return (
    mongoose
      // .connect("mongodb://127.0.0.1:27017/goibibo", {
      .connect(
        "mongodb+srv://hackathon:hackathon@cluster0.qh53e.mongodb.net/hackathon?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log(`connection successful`);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};
module.exports = connect;
