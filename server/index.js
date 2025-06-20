const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.port ||3000

app.use(cors({
    origin: 'http://localhost:5173',
    //origin: 'https://kudos-board-1-toyh.onrender.com',
    credentials: true
}))

app.use(express.json())
const boards = require('./routes/routes')
app.use('/', boards)

app.listen(PORT, () =>  {
    console.log(`Server running`);
})