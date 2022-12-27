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
    res.status(200).send(test)
  })
  app.get('/time', (req, res) => {
    let time = new Date();
    res.status(200).send({ status: 200 , message : `${time.getHours()}:${time.getMinutes()}`})
  })

  app.get('/hello/:id', (req, res) => {
  let id = req.params.id  
    res.status(200).send({status:200 , message:"hello",id})
  })
  app.get('/searchs?/:search' , (req ,res)=> {
    let data= req.params.search;

    res.send({status:200, message:"ok", data:data});
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

