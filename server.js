const express = require("express");
const helmet = require("helmet");
const server = express();
const cors = require("cors");
const patientRoute = require("./routes/patientRoute/patientRoute");
const driverRoute = require("./routes/driverRoute/driverRoute");
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/patient", patientRoute);
server.use("/api/driver", driverRoute);

server.use((err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: "Something went wrong"
  });
});

if (!module.parent) {
  server.listen(port, host, () => {
    console.log(`\n=> Server up at http://localhost:${port}\n`);
  });
}

module.exports = server;
