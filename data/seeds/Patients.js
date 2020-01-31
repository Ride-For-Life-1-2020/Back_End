exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Patients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Patients").insert([
        {
          FullName: "Terry Thomas",
          UserName: "terrythomas",
          Password: "password123",
          PhoneNumber: "1234567891",
          DueDate: "6/12/2020",
          Email: "TerryT@gmail.com",
          Address: "123 Kampala Street",
          City: "Kampala"
        },
        {
          FullName: "Rihanna",
          UserName: "rihanna",
          Password: "password123",
          PhoneNumber: "1234567891",
          DueDate: "6/12/2020",
          Email: "Rihanna@gmail.com",
          Address: "345 Jinja Street",
          City: "Jinja"
        },
        {
          FullName: "Mary Michaels",
          UserName: "marymichaels",
          Password: "password123",
          PhoneNumber: "1234567891",
          DueDate: "6/12/2020",
          Email: "MaryM@gmail.com",
          Address: "123 Gulu Ave",
          City: "Gulu"
        }
      ]);
    });
};
