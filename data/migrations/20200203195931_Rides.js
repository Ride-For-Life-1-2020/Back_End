exports.up = async function(knex) {
  await knex.schema.createTable("Rides", table => {
    table.increments("id"),
      table
        .integer("Patient_ID")
        .notNullable()
        .references("id")
        .inTable("Patients");
    table
      .integer("Driver_ID")
      .notNullable()
      .references("id")
      .inTable("Drivers");
    table.string("Address", 120).notNullable();
  });
};

exports.down = function(knex) {};
