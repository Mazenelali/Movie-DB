const { text } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  let test = {
    status: 200,
    message: "ok",
  };
  res.status(200).send(test);
});
app.get("/time", (req, res) => {
  let time = new Date();
  res
    .status(200)
    .send({ status: 200, message: `${time.getHours()}:${time.getMinutes()}` });
});

app.get("/hello/:id", (req, res) => {
  let id = req.params.id;
  res.status(200).send({ status: 200, message: "hello", id });
});
app.get("/searchs?/:search", (req, res) => {
  let data = req.params.search;
  res.send({ status: 200, message: "ok", data: data });
});

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];

app.get("/movies/create", (req, res) => {
  res.send("");
});

app.get("/movies/read", (req, res) => {
  let data = `${movies[0].title} <dt> ${movies[1].title} <dt>${movies[2].title}<dt>${movies[3].title}`;
  res.status(200).send(data);
});

//   app.get('/movies/read/:date', (req, res) => {
//   let daTe= req.params.date

//   if(daTe == 1975){
//     res.status(200).send(`${movies[0].title} ----> ${movies[0].year}`)
//   }
//   else if(daTe == 1992){
//     res.status(200).send(`${movies[3].title} ----> ${movies[3].year}`)
//   }
//   else if(daTe == 1985){
//     res.status(200).send(`${movies[2].title} ----> ${movies[2].year}`)
//   }
//   else if(daTe == 2009){
//     res.status(200).send(`${movies[1].title} ----> ${movies[1].year}`)
//   }

//   else{
//     res.send(`<h1> this movie in ${daTe} is not found ` )
//   }

// })
//   app.get('/movies/read//:rating', (req, res) => {
//     let Rating= req.params.rating

//     if(Rating == 8){
//       res.status(200).send(`${movies[0].title} ----> ${movies[0].rating}`)
//     }
//     else if(Rating == 8){
//       res.status(200).send(`${movies[2].title} ----> ${movies[2].rating}`)
//     }
//     else if(Rating == 7.8){
//       res.status(200).send(`${movies[1].title} ----> ${movies[1].rating}`)
//     }

//     else if(Rating == 6.2){
//       res.status(200).send(`${movies[3].title} ----> ${movies[3].rating}`)
//     }
//     else{
//       res.send(`<h1> this movie in ${Rating}rate is not found ` )
//     }
//     })
app.get("/movies/read/:text", (req, res) => {
  if (req.params.text === "by-date") {
    res
      .status(200)
      .send({ status: 200, data: movies.sort((a, b) => a.year - b.year) });
  } else if (req.params.text === "by-rating") {
    res
      .status(200)
      .send({ status: 200, data: movies.sort((a, b) => b.rating - a.rating) });
  } else if (req.params.text === "by-title") {
    res.status(200).send({
      status: 200,
      data: movies.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (b.title > a.title) {
          return -1;
        } else {
          return 0;
        }
      }),
    });
  }
});

app.get("/movies/update", (req, res) => {
  res.send("Hello World!");
});

app.get("/movies/delete", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
