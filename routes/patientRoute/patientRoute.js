const router = require("express").Router();
const patientModel = require("../patientRoute/patientModel");
const secret = require("../../authentication/secret");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticationMW = require("../../authentication/authenticationMW");
const { checkForPatient } = require("../../middleware/updateCheck");

router.get("/", authenticationMW, async (req, res, next) => {
  try {
    res.status(200).json(await patientModel.find());
  } catch (err) {
    next(err);
  }
});

router.put(
  "/:id",
  authenticationMW,
  checkForPatient(),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;
      res
        .status(200)
        .json(await patientModel.updatePatient({ id, ...changes }));
    } catch (err) {
      next(err);
    }
  }
);

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
      .loginFindBy({ UserName: req.body.UserName })
      .first();
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

router.delete(
  "/:id",
  authenticationMW,
  checkForPatient(),
  async (req, res, next) => {
    try {
      await patientModel.deletePatient(req.params.id);
      res.status(201).json({ Success: "Patient Deleted Successfully!" });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
