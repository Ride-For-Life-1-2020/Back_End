const router = require("express").Router();
const driverModel = require("../driverRoute/driverModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../authentication/secret");

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
      .findBy({ UserName: req.body.UserName })
      .first();
    console.log(Driver);
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

module.exports = router;
