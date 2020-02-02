exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Drivers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Drivers").insert([
        {
          FullName: "Tom Jerry",
          UserName: "tomjerry",
          Password:
            "$2a$14$YeVVr3J4PXWTM.STM0PGAOsruLqg7y8PeW4Rsi4/LftHCk1e5FSI2",
          PhoneNumber: "1234567891",
          Vehicle: "Motorcycle",
          Shift: "PM",
          Price: "50",
          Email: "tomjerry@gmail.com",
          City: "Kampala"
        },
        {
          FullName: "Martha Stewart",
          UserName: "marthastewart",
          Password:
            "$2a$14$YeVVr3J4PXWTM.STM0PGAOsruLqg7y8PeW4Rsi4/LftHCk1e5FSI2",
          PhoneNumber: "1234567891",
          Vehicle: "SUV",
          Shift: "AM",
          Price: "35",
          Email: "marthastewart@gmail.com",
          City: "Kampala"
        },
        {
          FullName: "Dan Abramov",
          UserName: "danabramov",
          Password:
            "$2a$14$YeVVr3J4PXWTM.STM0PGAOsruLqg7y8PeW4Rsi4/LftHCk1e5FSI2",
          PhoneNumber: "1234567891",
          Vehicle: "Motorcycle",
          Shift: "AM",
          Price: "42",
          Email: "danabramov@gmail.com",
          City: "Jinja"
        }
      ]);
    });
};
