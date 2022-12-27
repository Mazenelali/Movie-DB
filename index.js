const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/test', (req, res) => {
  let test = {
    status : 200,
    message:"ok",
  }
    res.send(test)
  })
  app.get('/time', (req, res) => {
    TIME=req.query.time
    let time = {
      status:200,
      message:TIME,
      }
    res.send(time)
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

