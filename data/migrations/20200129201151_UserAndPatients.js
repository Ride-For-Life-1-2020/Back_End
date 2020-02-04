exports.up = async knex => {
  await knex.schema.createTable("Cities", table => {
    table.increments("id"), table.string("City", 50).notNullable();
  });
  await knex.schema.createTable("Patients", table => {
    table.increments(), table.string("FullName", 50).notNullable();
    table
      .string("UserName", 50)
      .notNullable()
      .unique();
    table.varchar("Password", 240).notNullable(),
      table.integer("PhoneNumber", 11).notNullable(),
      table.date("DueDate"),
      table.string("Email", 128),
      table.string("Address", 240),
      table
        .integer("City_ID")
        .notNullable()
        .references("id")
        .inTable("Cities");
  });
  await knex.schema.createTable("Drivers", table => {
    table.increments(), table.string("FullName", 50).notNullable();
    table
      .string("UserName", 50)
      .notNullable()
      .unique();
    table.varchar("Password", 240).notNullable(),
      table.integer("PhoneNumber", 11).notNullable(),
      table.string("Vehicle", 128),
      table.string("Shift", 128),
      table.integer("Price"),
      table.string("Email", 128);
    table
      .integer("City_ID")
      .notNullable()
      .references("id");
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("Patients");
  await knex.schema.dropTableIfExists("Drivers");
  await knex.schema.dropTableIfExists("Cities");
};
