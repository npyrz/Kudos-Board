const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


app.use(express.json())

const boards = require('./routes/boards')
// const cards = require('./routes/cards')

app.use(boards)
// app.use(cards)

app.listen(PORT, () =>  {
    console.log(`Server running at http://localhost:${PORT}`);
})