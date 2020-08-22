const ecss = require('./core/processor');

module.exports = function process (stylesheet, inputPath) {
  ecss().process(stylesheet);
  console.log('params received');
}