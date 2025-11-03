import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("200 OK")
});

app.listen(3000, () => {
  console.log("API LISTENING");
})