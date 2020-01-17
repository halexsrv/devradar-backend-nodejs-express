const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

const server = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
