const patientModel = require("../routes/patientRoute/patientModel");
const driverModel = require("../routes/driverRoute/driverModel");

function checkForPatient(req, res, next) {
  return async (req, res, next) => {
    const { id } = req.params;
    const [findUser] = await patientModel.findBy({ id });
    if (findUser) {
      req = req;
      next();
    } else {
      res.status(404).json({ Error: "Patient Not Found" });
    }
  };
}

function checkForDriver(req, res, next) {
  return async (req, res, next) => {
    const { id } = req.params;
    const [findUser] = await driverModel.findBy({ id });
    if (findUser) {
      req = req;
      next();
    } else {
      res.status(404).json({ Error: "Driver Not Found" });
    }
  };
}

module.exports = { checkForPatient, checkForDriver };
