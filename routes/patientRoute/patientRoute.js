const router = require("express").Router();
const patientModel = require("../patientRoute/patientModel");
const secret = require("../../authentication/secret");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res, next) => {
  try {
    res.status(201).json(await patientModel.registerPatient(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const Patient = await patientModel
      .findBy({ UserName: req.body.UserName })
      .first();
    console.log(Patient);
    const validPassword = await bcrypt.compare(
      req.body.Password,
      Patient.Password
    );
    if (Patient && validPassword) {
      const token = jwt.sign(
        {
          id: Patient.id,
          username: Patient.UserName
        },
        secret.string,
        { expiresIn: "3d" }
      );
      res.status(200).json({
        message: `Welcome ${Patient.UserName}`,
        token: token
      });
    } else {
      res.status(401).json({
        message: "Invalid Credentials"
      });
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
