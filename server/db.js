// db/initDB.js

const mysql = require('mysql2');

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};


// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

// Initialize the database
const initDB = () => {
  console.log('Initializing database...');
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');

    // Perform any initialization tasks here (e.g., create tables, seed data)

    // Release the connection
    connection.release();
  });
  console.log('Database initialization complete');
};

module.exports = initDB;
