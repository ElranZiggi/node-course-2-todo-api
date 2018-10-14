var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Model} = require('./models/model1');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/',(req,res) =>{
	res.send("Hello, running on port: " + port)
});

app.post('/model', (req, res) => {
  var model = new Model({
    text: req.body.text
  });

  model.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });
});

app.listen(port, () => {
  console.log(`Started at port ${port}`);
});

module.exports = {app};