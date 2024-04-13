import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("fuck you vamsi!! you fooking idiot");
});

app.listen(3000);
