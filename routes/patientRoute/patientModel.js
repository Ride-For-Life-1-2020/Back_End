const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");

function find() {
  return db("Patients").select(
    "id",
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
      "id",
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
async function updatePatient(data) {
  if (data.Password) {
    data.Password = await bcrypt.hash(data.Password, 14);
  }
  await db("Patients")
    .update(data)
    .where({ id: data.id });
  return findBy({ id: data.id }).first();
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
  find,
  updatePatient
};
