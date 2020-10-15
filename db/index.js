// Makes the environment variables work - Often the cause of ECONNREFUSED if not here!
require('dotenv').config()

// db config
const { Pool } = require("pg");

const pool = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
});

// export query function for use in app
module.exports = {
  query: (sql, values, callback) => pool.query(sql, values, callback)
};
