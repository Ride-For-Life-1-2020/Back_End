module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: `postgres://plspasivdiviwu:2066dc6a782d5350232fa95d161a009abd5042b0727ce2a20b2720d3458cee28@ec2-54-92-174-171.compute-1.amazonaws.com:5432/d5ivfaomp2k08k?ssl=true`,
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
