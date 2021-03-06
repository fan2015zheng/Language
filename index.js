import express from 'express'
import wordRoutes from './src/routes/wordR'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

if (!process.env.heroku) {
  require('dotenv').config()
}


const app = express()
const PORT = process.env.PORT || 5000

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect(
  process.env.ATLAS_FREE + "/Language?retryWrites=true&w=majority", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

// body-parser setup
app.use(
  bodyParser.urlencoded(
    {
      extended: true
    }
  )
)
app.use(
  bodyParser.json()
)

app.use(cors())

wordRoutes(app)

app.get('/', (req, res) => {
  res.send("Happy Language API")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})