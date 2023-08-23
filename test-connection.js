const { Client } = require("pg");

// Get the connection string from the environment variable
const connectionString = `postgres://postgres:m7BHAIMU2CR2c0k@mini-message-board-roamingterra.fly.dev:5432`;

// Create a new PostgreSQL client
const client = new Client({ connectionString: connectionString });

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1);
  }
  console.log("Connected to the database!");
  // Perform any test queries or operations here (optional)

  // Close the client connection
  client.end((err) => {
    if (err) {
      console.error("Error closing the database connection:", err.message);
    }
    console.log("Database connection closed.");
  });
});
