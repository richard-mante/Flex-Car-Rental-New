import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Api is working");
});

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
