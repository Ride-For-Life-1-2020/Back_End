const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");

function find() {
  return db("Drivers").select(
    "id",
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
      "id",
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
async function updateDriver(data) {
  await db("Drivers")
    .update(data)
    .where({ id: data.id });
  return findBy({ id: data.id }).first();
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
  find,
  updateDriver
};
