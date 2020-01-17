const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const server = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(express.json());

server.get('/', (request, response) => {
  return response.json({ message: 'test' });
});

server.listen(3333);
