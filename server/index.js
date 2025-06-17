const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const boardRoutes = require('./routes/boards');

app.use('/boards', boardRoutes);

app.listen(PORT, () =>  {
    console.log(`Server running at http://localhost:${PORT}`);
})