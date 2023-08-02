// This file is where we store our message routes

const { Router } = require("express");
const controller = require("./controller");

const router = Router(); // router object

// Index route for viewing messages
router.get("/", controller.getMessages);

// New route for viewing the new message form
router.get("/new", controller.getNewMessageForm);

// New route for posting a new message to the messages database
router.post("/new", controller.postNewMessage);

router.get("/debug", (req, res) => {
  console.log("Debug route accessed.");
  // Add any relevant data or checks to log here
  res.send("Debug route accessed.");
});

module.exports = router;
