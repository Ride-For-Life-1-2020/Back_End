const patientModel = require("../routes/patientRoute/patientModel");
const driverModel = require("../routes/driverRoute/driverModel");

function checkForPatient(req, res, next) {
  return async (req, res, next) => {
    const { id } = req.params;
    const [findUser] = await patientModel.findBy({ id });
    if (!findUser) {
      res.status(404).json({
        Error: "Patient Cannot Be Found"
      });
    } else {
      req = req;
      next();
    }
  };
}

function checkForDriver(req, res, next) {
  return async (req, res, next) => {
    const { id } = req.params;
    const [findUser] = await driverModel.findBy({ id });
    if (!findUser) {
      res.status(404).json({
        Error: "Driver Cannot Be Found"
      });
    } else {
      req = req;
      next();
    }
  };
}

module.exports = { checkForPatient, checkForDriver };
