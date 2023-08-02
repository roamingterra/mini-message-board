// This file is where we store the business logic that's related to each route
const pool = require("../../db");
const queries = require("./queries");
const date = require("date-and-time");

const getMessages = (req, res) => {
  pool.query(queries.getMessages, (error, results) => {
    if (error) throw error;

    const modifiedData = results.rows.map((row) => {
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
  });
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
