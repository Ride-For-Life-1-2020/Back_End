const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");

function find() {
  return db("Patients").select(
    "FullName",
    "UserName",
    "PhoneNumber",
    "DueDate",
    "Email",
    "Address",
    "City"
  );
}
function findBy(filter) {
  return db("Patients")
    .where(filter)
    .select(
      "FullName",
      "UserName",
      "PhoneNumber",
      "DueDate",
      "Email",
      "Address",
      "City"
    );
}
function loginFindBy(filter) {
  return db("Patients")
    .where(filter)
    .select("*");
}

async function registerPatient(Patient) {
  Patient.Password = await bcrypt.hash(Patient.Password, 14);
  const [id] = await db("Patients").insert(Patient);
  return findBy({ id }).first();
}

module.exports = {
  registerPatient,
  findBy,
  loginFindBy,
  find
};
