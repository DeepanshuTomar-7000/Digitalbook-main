const connectToMongo= require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000
app.use(cors())
app.use(express.json())



app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello login!')
})

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
    console.log(`Digitalbook backend listening on port http://127.0.0.1:${port}`)
})
