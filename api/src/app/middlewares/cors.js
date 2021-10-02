const os = require('os');

const { Ethernet } = os.networkInterfaces();

const { address } = Ethernet[1];

console.log(`http://${address}:3000`);

module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Origin', `http://${address}:3000`);
  next();
};
