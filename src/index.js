const express = require('express');
const knex = require('./cnx');
const bcrypt = require('bcrypt');
require('dotenv').config()
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors())



app.get('/pessoas', async (req, res) => {
    try {
        const pessoaslist = await knex('pessoas')
       return res.json(pessoaslist)
    } catch (error) {
        return res.json(error.message)
    }
})

app.post('/pessoas', async (req, res) => {
    try {
        const { nome, senha } = req.body
        const senhaCrypt = await bcrypt.hash(senha, 10)
        await knex('pessoas').insert({ nome: nome, pwd: senhaCrypt })
        return res.json('criado com sucesso')
    } catch (error) {
        return res.json(error.message)
    }
})


app.listen(process.env.PORT)