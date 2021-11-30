const fs = require('fs');
const express = require('express');
const { send } = require('process');
const app = express();
const port = 3000;
app.use(express.static('public'))

app.get('/', (req, res) => {

  console.log("HTML File has been called!");
  res.redirect('/urameshi.html');

})

app.get('/getData', (req, res) => {

    let data = {
        person : "Joachim",
        favManga : "Dragon Ball",
        favAnime : "Samurai Champloo",
        favGame : "Kingdom Hearts II",
        favSeries : "Breaking Bad",
        favMusician : "MF Doom"
    };
  res.send(data)
})

app.get('/randomText', (req, res) => {
  let text = "Ashita no Joe";

  res.send(text);
})

app.get('/api/boardgames', (req, res) => {
  let list = fs.readFileSync('./boardgames.json', 'utf-8');
  res.json(JSON.parse(list)); 
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})