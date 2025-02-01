const { Pool } = require('pg')
require('dotenv').config()

const db = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    ssl: {
        rejectUnauthorized: false, // Aiven requires SSL but doesn't need certificate validation
    },
});

(async () => {
    try {
        const client = await db.connect();
        console.log("Connected to aiven postgress");
        const res = await db.query('SELECT NOW()')
        console.log("Server time:", res.rows[0].now);
        client.release()
    } catch (error) {
        console.log("Error connecting with Aiven Postgres", error)
    }
})()

module.exports = db;