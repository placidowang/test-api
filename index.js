const path = require("path");
const express = require("express");
const app = express();

// test commit in main

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// uses React src/App.js instead of server/public/index.html
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
// console.log('PORT is: ' + PORT);

app.listen(PORT, () => {
  console.log(`API is live on port ${PORT}!`);
});

app.get("/results", (req, res) => {
  res.send({ message: "you gotta use post to /results man" });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
