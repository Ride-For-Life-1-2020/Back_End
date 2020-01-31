const router = require("express").Router();
const driverModel = require("../driverRoute/driverModel");

router.post("/signup", async (req, res, next) => {
  try {
    res.status(201).json(await driverModel.registerDriver(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
