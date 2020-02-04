const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");

function find() {
  return db("Drivers")
    .select(
      "Drivers.id",
      "FullName",
      "UserName",
      "PhoneNumber",
      "Vehicle",
      "Shift",
      "Price",
      "Email",
      "c.City"
    )
    .join("Cities as c", "c.id", "Drivers.City_ID");
}

function findBy(filter) {
  return db("Drivers")
    .where(filter)
    .select(
      "Drivers.id",
      "FullName",
      "UserName",
      "PhoneNumber",
      "Vehicle",
      "Shift",
      "Price",
      "Email",
      "c.City"
    )
    .join("Cities as c", "c.id", "Drivers.City_ID");
}
async function updateDriver(data) {
  if (data.Password) {
    data.Password = await bcrypt.hash(data.Password, 14);
  }
  await db("Drivers")
    .update(data)
    .where({ UserName: data.UserName });
  return findBy({ UserName: data.UserName }).first();
}
function loginFindBy(filter) {
  return db("Drivers")
    .where(filter)
    .select("*")
    .join("Cities as c", "c.id", "Drivers.City_ID");
}

async function registerDriver(Driver) {
  Driver.Password = await bcrypt.hash(Driver.Password, 14);
  await db("Drivers").insert(Driver);
  return findBy({ UserName: Driver.UserName }).first();
}

function deleteDriver(UserName) {
  return db("Drivers")
    .del()
    .where({ UserName });
}
module.exports = {
  registerDriver,
  findBy,
  loginFindBy,
  find,
  updateDriver,
  deleteDriver
};
