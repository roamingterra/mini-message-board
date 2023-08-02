// This file is for the database connection

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mini_message_board_messages",
  password: "password",
  port: 5432,
});

module.exports = pool;
