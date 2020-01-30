const express = require("express");
const helmet = require("helmet");
const server = express();
const port = process.env.PORT || 8080;

server.use(helmet());
server.use(express.json());

server.use((err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: "Something went wrong"
  });
});

if (!module.parent) {
  server.listen(port, () => {
    console.log(`\n=> Server up at http://localhost:${port}\n`);
  });
}

module.exports = server;
