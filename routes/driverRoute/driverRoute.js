const router = require("express").Router();
const driverModel = require("../driverRoute/driverModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../authentication/secret");
const authenticationMW = require("../../authentication/authenticationMW");
const { checkForDriver } = require("../../middleware/updateCheck");

router.get("/", authenticationMW, async (req, res, next) => {
  try {
    res.status(200).json(await driverModel.find());
  } catch (err) {
    next(err);
  }
});
router.get(
  "/:UserName",
  authenticationMW,
  checkForDriver(),
  async (req, res, next) => {
    try {
      res
        .status(200)
        .json(
          await driverModel.findBy({ UserName: req.params.UserName }).first()
        );
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:UserName",
  authenticationMW,
  checkForDriver(),
  async (req, res, next) => {
    try {
      const { UserName } = req.params;
      const changes = req.body;
      res
        .status(200)
        .json(await driverModel.updateDriver({ UserName, ...changes }));
    } catch (err) {
      next(err);
    }
  }
);

router.post("/signup", async (req, res, next) => {
  try {
    res.status(201).json(await driverModel.registerDriver(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const Driver = await driverModel
      .loginFindBy({ UserName: req.body.UserName })
      .first();
    if (!Driver) {
      res.status(401).json({
        message: "Driver Does Not Exist"
      });
    } //Change this to MW
    const validPassword = await bcrypt.compare(
      req.body.Password,
      Driver.Password
    );
    if (Driver && validPassword) {
      const token = jwt.sign(
        {
          id: Driver.id,
          username: Driver.UserName
        },
        secret.string,
        { expiresIn: "3d" }
      );
      res.status(200).json({
        message: `Welcome ${Driver.UserName}`,
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
  "/:UserName",
  authenticationMW,
  checkForDriver(),
  async (req, res, next) => {
    try {
      await driverModel.deleteDriver(req.params.UserName);
      res.status(201).json({ Success: "Driver Deleted Successfully!" });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
