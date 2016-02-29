var express = require('express'),
    config = require('./config');


  var app = express();



app.get('*',function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})



  app.listen(config.port,function (err) {
    if (err) {
      console.log(err);
    }else {
      console.log("Listenning on port: "+config.port);
    }
  })
