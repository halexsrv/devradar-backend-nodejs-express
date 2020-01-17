const express = require('express');

const server = express();

server.get('/', (request, response) => {
  return response.json({ message: 'test' });
});

server.listen(3333);
