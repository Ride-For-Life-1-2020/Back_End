exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Rides")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Rides").insert([
        { Patient_ID: 1, Driver_ID: 1, Address: "123 New England Ave" },
        { Patient_ID: 2, Driver_ID: 2, Address: "123 Highland Blvd" },
        { Patient_ID: 3, Driver_ID: 3, Address: "123 Singletree Court" }
      ]);
    });
};
