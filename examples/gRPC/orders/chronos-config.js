require('dotenv').config();
const chronos = require('chronos-tracker');

chronos.use({
  microservice: 'orders',
  interval: 2000,
  // dockerized: true,ß
  database: {
    type: 'MongoDB',
    URI: process.env.CHRONOS_URI,
  },
  notifications: [],
});