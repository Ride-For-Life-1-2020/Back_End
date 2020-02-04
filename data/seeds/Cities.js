exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Cities")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Cities").insert([
        { id: 1, City: "Kampala" },
        { id: 2, City: "Gulu" },
        { id: 3, City: "Lira" },
        { id: 4, City: "Mbarara" },
        { id: 5, City: "Jinja" },
        { id: 6, City: "Bwizibwera" },
        { id: 7, City: "Mbale" },
        { id: 8, City: "Mukono" },
        { id: 9, City: "Kasese" },
        { id: 10, City: "Masaka" }
      ]);
    });
};
