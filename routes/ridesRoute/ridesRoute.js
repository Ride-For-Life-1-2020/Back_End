const router = require("express").Router();
// const patientModel = require("./ridesModel");
const authenticationMW = require("../../authentication/authenticationMW");

router.get("/", authenticationMW, async (req, res, next) => {
  try {
    res.status(200).json({ test: "test" });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
