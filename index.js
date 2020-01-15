const express = require('express');

const server = express();

server.get('/', (request, response) => {
  return response.send('test');
});

server.listen(3333);
