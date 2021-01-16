require('dotenv').config();
const chronos = require('chronos-tracker');
require('dotenv').config();
chronos.use({
  microservice: 'reverse-proxy',
  interval: 2000,
  // dockerized: true,
  database: {
    type: 'MongoDB',
<<<<<<< HEAD
    URI: process.env.CHRONOS_URI
  },
  notifications: [],
=======
    URI: process.env.CHRONOS_URI,
>>>>>>> 74e1303cd1efd5673790ff3b863672c22528c294
});