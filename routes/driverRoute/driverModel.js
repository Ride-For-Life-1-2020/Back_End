const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");

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

async function registerPatient(Driver) {
  Driver.Password = await bcrypt.hash(Driver.Password, 14);
  const [id] = await db("Drivers").insert(Driver);
  return findBy({ id }).first();
}

module.exports = {
  registerPatient,
  findBy
};
