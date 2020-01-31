const router = require("express").Router();
const patientModel = require("../patientRoute/patientModel");

router.post("/signup", async (req, res, next) => {
  try {
    res.status(201).json(await patientModel.registerPatient(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
