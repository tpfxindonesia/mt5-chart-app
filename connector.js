const axios = require('axios');
require('dotenv').config();

const { MT5_API_URL, MT5_API_TOKEN } = process.env;

async function getOHLC(symbol, from, to, resolution) {
  return [
    { time: from, open: 1.1, high: 1.2, low: 1.0, close: 1.15, volume: 100 },
    { time: to, open: 1.15, high: 1.25, low: 1.1, close: 1.2, volume: 150 }
  ];
}

module.exports = { getOHLC };