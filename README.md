# mini message board

This is my first full stack application. It was made using the following stack:

Front end: - html is dynamically served through the use of ejs templates - The front end is styled using a combo of vanilla css and bootstrap
Back end: - Node.JS/Express ecosystem - PostgreSQL database - hosted by Fly.io

The goals of this project were to;

- Teach myself some bootstrap to create sleek user interfaces in less time. The focus is meant to be on the Express framework
- Use Express.js to create a simple full stack application
- Set up routing so that the user can navigate between the messages page and the
  form page. Both pages are served to us through the use of ejs templates
- Get familiar with working with a PaaS (Platform as a service). In this case, I used Fly.io.

Important lessons learnt:

- Fly does not automatically import your database. You have to manually create your own relations within the Fly created database, or you have to import it yourself

- Use the Pool object from the Node.JS module 'pg', to establish a connection with the database. Fly should have set up an environment variable called 'DATABASE_URL'. Set your connection string to this environment variable, and you should be good to go.

# Access the site

https://mini-message-board-roamingterra.fly.dev/
