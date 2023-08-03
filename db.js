// This file is for the database connection

const Pool = require("pg").Pool;
const { Client } = require("pg");

// Database will use the DATABASE_URL environment variable to connect to the PostgreSQL database provided by Fly.io
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

module.exports = client;

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "mini_message_board_messages",
//   password: "password",
//   port: 5432,
// });

// module.exports = pool;
