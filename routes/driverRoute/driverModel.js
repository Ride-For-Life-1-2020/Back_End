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
  if (data.Password) {
    data.Password = await bcrypt.hash(data.Password, 14);
  }
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
  await db("Drivers").insert(Driver);
  return findBy({ UserName: Driver.UserName }).first();
}

function deleteDriver(id) {
  return db("Drivers")
    .del()
    .where({ id });
}
module.exports = {
  registerDriver,
  findBy,
  loginFindBy,
  find,
  updateDriver,
  deleteDriver
};
