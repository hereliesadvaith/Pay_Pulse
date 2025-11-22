import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Pay Pulse API!");
});

app.listen(5000, () => {
  console.log("Pay Pulse running on port http://localhost:5000");
});

export default app;
