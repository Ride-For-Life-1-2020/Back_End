module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: `${process.env.TEST_DB}?ssl=true`,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "pg",
    useNullAsDefault: true,
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
