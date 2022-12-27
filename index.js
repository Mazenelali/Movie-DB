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

  const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

  app.get('/movies/create', (req, res) => {
    res.send("")
  })

  app.get('/movies/read', (req, res) => {
    
    let data = `${movies[0].title} , ${movies[1].title} ,${movies[2].title},${movies[3].title}`
    res.status(200).send(data)
  })

  app.get('/movies/update', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/movies/delete', (req, res) => {
    res.send('Hello World!')
  })








  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

