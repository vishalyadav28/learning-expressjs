require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
var cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, cors(),() => {
  console.log(`Serve at http://localhost:${port}`)
})


app.get(
  '/api/jokes', (req, res) => {
    const jokes = [
      {
        id: 1,
        title: 'title1',
        content: 'content1'
      },
      {
        id: 2,
        title: 'title2',
        content: 'content2'
      },
      {
        id: 3,
        title: 'title3',
        content: 'content3'
      }

    ];
    res.send(jokes);
  }
)