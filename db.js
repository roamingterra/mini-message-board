// This file is for the database connection

const Pool = require("pg").Pool;

// Database will use the DATABASE_URL environment variable to connect to the PostgreSQL database provided by Fly.io
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
