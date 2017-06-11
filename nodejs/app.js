const express = require('express');
const app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static(req, res){
  let topics = [
    'JavaScript is...',
    'Nodejs is...'
    'Express is...'
  ];
  let str = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
  `;
  let output = str + topics[req.query.id];
  res.send(output);
})
app.get('/param/:module_id/:topic_id', function(req, res){
  res.json(req.params);
})
