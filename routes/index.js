const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini Messageboard',
    messages: messages,
  });
});

router.post("/new", (req, res, next) => {

  messages.push({
    text: req.body.message,
    user: req.body.authorName,
    added: new Date()
  });
  console.log(req.body)
  res.redirect("/")
})

module.exports = router;
