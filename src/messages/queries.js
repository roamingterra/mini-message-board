// This file is for storing all of the SQL queries that are used against the database

const getMessages = "SELECT * FROM messages";

const postMessage =
  "INSERT INTO messages(text, username, date_added) VALUES ($1, $2, $3)";

module.exports = {
  getMessages,
  postMessage,
};
