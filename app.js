const express = require('express');
const data = require('./data');
const buzzword = require('./buzzword');
const app = express();
const PORT = process.env.PORT || 8080;
//send index.html file on get request /
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
})
//send buzzwords on get request /buzzwords
app.get('/buzzwords', (req, res)=>{
  res.send(data.buzzWords);
})

app.use(`/buzzwords`, buzzword);

app.post('/reset', (req, res)=>{
  console.log('reset')
  data.buzzWords = [];
  data.score = 0;
  res.send({ "success": true })
})

app.post('/heard', (req, res)=>{
  for (let i = 0; i < data.buzzWords.length; i++) {
    if(req.body.buzzword===data.buzzWords[i].word){
      data.buzzWords[i].heard === true;
      data.score = parseInt(data.buzzWords[i].points)
      res.send(`{"success: true,  "totalScore: " ${data.score}`)
    }else {
      return false;
    }
  }
})


app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
})