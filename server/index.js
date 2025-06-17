const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const boardRoutes = require('./routes/boards');
const cardRoutes = require('./routes/cards')

app.get('/', (req, res) => {
    //res.send("") <- ADD HERE
})

app.use('/boards', boardRoutes);
app.use('/boards/:id/cards', cardRoutes);

app.listen(PORT, () =>  {
    console.log(`Server running at http://localhost:${PORT}`);
})