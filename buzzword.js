
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const data = require(`./data`);

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', (req, res) => {
  if (data.buzzWords.includes(req.body.buzzWord)) {
    res.send('word already exists');
    return false;
    console.log(data.buzzWords);
  } else {
    let newBuzzword = {};
    newBuzzword.buzzWord = req.body.buzzword;
    newBuzzword.points = req.body.points;
    data.buzzWords.push(newBuzzword)
    res.send({ "success": true });
  }

});


router.put('/', (req, res) => {
  for (let i = 0; i < data.buzzWords.length; i++) {
    if (req.body.buzzword === data.buzzWords[i].word) {
      data.buzzWords[i].score = parseInt(req.body.points);
      res.send({ "success": true });
      return true;
    } else {
      res.send('false');
      return false;
    }
  }
})

router.delete('/', (req, res) => {
  for (let i = 0; i < data.buzzWords.length; i++) {
    if (req.body.buzzWord === data.buzzWords[i].word) {
      data.buzzWords.splice(i, 1);
      res.send({ "success": true })
      return true
    } else {
      res.send('false');
      return false;
    }
  }
})

module.exports = router;