const api = require('../../src/index')

api.port(3000)
api.onInitialize((port:number) => {
  return console.log(`-- SERVER RUNNING ON PORT ${port} --`);
});
api.get('/', (req, res)=> {
  res.send('Hello Swagger!');
});
api.swaggerDirectory('./dist/src/*.js');
api.swaggerTitle('Mi Swagger');
api.enableSwagger();
api.start();
