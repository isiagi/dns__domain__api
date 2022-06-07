const dotenv = require('dotenv');

dotenv.config()

const dnsimple = require('dnsimple')({
    accessToken: process.env.ACCESSTOKEN,
    baseUrl: 'https://api.sandbox.dnsimple.com',
  });

module.exports = dnsimple