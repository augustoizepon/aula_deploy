const express = require('express');
require('dotenv').config()
const app = express();
app.use(express.json())


app.get('/', async (req, res) => {
    res.json("api esta ok")
})


app.listen(process.env.PORT)