function find() {
  return db("Rides")
    .select("*")
    .join("Patients as p", "c.id", "Patients.City_ID")
    .join("Drivers as d");
}
