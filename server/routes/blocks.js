const express = require('express');
const router = express.Router()
const db = require("../config/db")

router.get('/', async (req, res) => {
    try {

        const { rows } = await db.query(`
           SELECT 
           (data->'data'->0->'block'->>'timestamp')::TEXT AS timestamp,
           (data->'data'->0->'block'->>'gasUsed')::TEXT AS gasUsed
           FROM "latest-blocks"
           ORDER BY from_block_number DESC
           LIMIT 10;`);
        res.json(rows);
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;