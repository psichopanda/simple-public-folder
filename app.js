require('dotenv/config')
const express = require("express")
const session = require("express-session")
const cors = require('cors');
const path = require('node:path')

const app = express()
const sessionConfig = {
    secret: process.env.SESSION_SECRET ?? "session_secret",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}

app.use(cors({
  origin: '*'
}));

app.set('trust proxy', 1)

app.use(express.json())
//app.use(express.static('public'))
app.use(session(sessionConfig))

app.get('/', (req, res) => {
    res.json({"teste": "teste"})
})

app.listen(process.env.PORT ?? 3000, () => console.log("running"))
