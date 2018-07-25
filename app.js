const express = require('express');
const data = require('./data');
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

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
})