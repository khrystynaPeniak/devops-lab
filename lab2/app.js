const express = require("express");
const app = express();
const PORT = process.env.PORT || 3008;

//app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node.js Docker with Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
