import express from "express";
const app = express();
app.use(express.json());
app.listen(8800, () => {
  let date = new Date();
  console.log("Connected", date);
});
