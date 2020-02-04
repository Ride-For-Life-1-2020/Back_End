const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");

function find() {
  return db("Patients")
    .select(
      "Patients.id",
      "FullName",
      "UserName",
      "PhoneNumber",
      "DueDate",
      "Email",
      "Address",
      "c.City"
    )
    .join("Cities as c", "c.id", "Patients.City_ID");
}
function findBy(filter) {
  return db("Patients")
    .where(filter)
    .select(
      "Patients.id",
      "FullName",
      "UserName",
      "PhoneNumber",
      "DueDate",
      "Email",
      "Address",
      "c.City"
    )
    .join("Cities as c", "c.id", "Patients.City_ID");
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
    .where({ UserName: data.UserName });
  return findBy({ UserName: data.UserName }).first();
}
async function registerPatient(Patient) {
  Patient.Password = await bcrypt.hash(Patient.Password, 14);
  await db("Patients").insert(Patient);
  return findBy({ UserName: Patient.UserName }).first();
}

function deletePatient(UserName) {
  return db("Patients")
    .del()
    .where({ UserName });
}
module.exports = {
  registerPatient,
  findBy,
  loginFindBy,
  find,
  updatePatient,
  deletePatient
};
