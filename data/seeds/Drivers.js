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
          password: "password123",
          PhoneNumber: "1234567891",
          Vehicle: "Motorcycle",
          Shift: "PM",
          Price: "$50",
          Email: "tomjerry@gmail.com",
          City: "Kampala"
        },
        {
          FullName: "Martha Stewart",
          UserName: "marthastewart",
          password: "password123",
          PhoneNumber: "1234567891",
          Vehicle: "SUV",
          Shift: "AM",
          Price: "$35",
          Email: "marthastewart@gmail.com",
          City: "Kampala"
        },
        {
          FullName: "Dan Abramov",
          UserName: "danabramov",
          password: "password123",
          PhoneNumber: "1234567891",
          Vehicle: "Motorcycle",
          Shift: "AM",
          Price: "$42",
          Email: "danabramov@gmail.com",
          City: "Jinja"
        }
      ]);
    });
};
