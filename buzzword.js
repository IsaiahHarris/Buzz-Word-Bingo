
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const data = require(`./data`);

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', (req, res) => {
  let newBuzzword = {};
  newBuzzword.word = req.body.buzzword;
  newBuzzword.points = req.body.points;
  newBuzzword.heard = false;
  data.wordBank.push(newBuzzword)
  res.send({ "success": true });
});

module.exports = router;