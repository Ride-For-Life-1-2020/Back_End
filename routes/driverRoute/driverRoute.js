const router = require("express").Router();
const driverModel = require("../driverRoute/driverModel");

router.post("/signup", async (req, res, next) => {
  try {
    res.status(201).json(await driverModel.registerDriver(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  // implement login
  try {
    const { username, password } = req.body;
    const user = await userModel.findBy({ username }).first();
    const validPassword = await bcrypt.compare(password, user.password);
    if (user && validPassword) {
      const token = jwt.sign(
        {
          id: user.id,
          username: user.username
        },
        secret.string,
        { expiresIn: "3d" }
      );
      res.status(200).json({
        message: `Welcome ${user.username}`,
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
