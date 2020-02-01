const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");

function find() {
  return db("Drivers").select(
    "FullName",
    "UserName",
    "PhoneNumber",
    "Vehicle",
    "Shift",
    "Price",
    "Email",
    "City"
  );
}

function findBy(filter) {
  return db("Drivers")
    .where(filter)
    .select(
      "FullName",
      "UserName",
      "PhoneNumber",
      "Vehicle",
      "Shift",
      "Price",
      "Email",
      "City"
    );
}

function loginFindBy(filter) {
  return db("Drivers")
    .where(filter)
    .select("*");
}

async function registerDriver(Driver) {
  Driver.Password = await bcrypt.hash(Driver.Password, 14);
  const [id] = await db("Drivers").insert(Driver);
  return findBy({ id }).first();
}

module.exports = {
  registerDriver,
  findBy,
  loginFindBy,
  find
};
