// This file is where we store the business logic that's related to each route
const pool = require("../../db");
const queries = require("./queries");
const date = require("date-and-time");

// global error handler at the top of your controller.js file
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Promise Rejection:", reason);
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
});

const getMessages = async (req, res) => {
  try {
    const { rows: results } = await pool.query(queries.getMessages);
    console.log("Query Results:", results);

    if (!results.length) {
      // No data returned from the query
      console.log("no messages found");
      res.status(200).send("No messages found.");
      return;
    }

    const modifiedData = results.map((row) => {
      // Format date of message based on time passed
      let modifiedDate = row.date_added;
      const currentDate = new Date();
      const hourDifference =
        Math.abs(modifiedDate.getTime() - currentDate.getTime()) /
        (1000 * 60 * 60);
      const dayDifference = Math.abs(
        modifiedDate.getDay() - currentDate.getDay()
      );

      if (hourDifference < 24) {
        modifiedDate = date.format(modifiedDate, "ddd HH:mm");
      } else if (dayDifference >= 1 && dayDifference <= 7) {
        modifiedDate = date.format(modifiedDate, "ddd, MMM DD");
      } else if (dayDifference > 7) {
        modifiedDate = date.format(modifiedDate, "MMM DD YYYY");
      }
      return {
        text: row.text,
        username: row.username,
        date_added: modifiedDate,
      };
    });

    res.render("messages", { messageInfo: modifiedData });
  } catch (error) {
    console.error("Error in getMessages:", error);
    res.status(500).send("Error fetching messages.");
  }
};

const getNewMessageForm = (req, res) => {
  res.render("form");
};

const postNewMessage = (req, res) => {
  const { text, username } = req.body;

  // Convert the date_added string to a JavaScript Date object
  const dateAdded = new Date();

  pool.query(
    queries.postMessage,
    [text, username, dateAdded],
    (error, results) => {
      if (error) throw error;
      res.redirect(307, "/");
    }
  );
};

module.exports = { getMessages, getNewMessageForm, postNewMessage };
