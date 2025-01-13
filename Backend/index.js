const app = require("./app.js");
const dotenv = require("dotenv");
const DB_connect = require("./database/DB_connect");

dotenv.config({});

DB_connect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
