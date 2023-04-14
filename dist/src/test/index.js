"use strict";

var api = require('../../src/index');
api.port(3000);
api.onInitialize(function (port) {
  return console.log("-- SERVER RUNNING ON PORT ".concat(port, " --"));
});
api.get('/', function (req, res) {
  res.send('Hello Swagger!');
});
api.swaggerDirectory('./dist/src/*.js');
api.swaggerTitle('Mi Swagger');
api.enableSwagger();
api.start();