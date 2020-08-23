const chalk           = require('chalk');
const { COLOR_CODES } = require('./constants');

module.exports = (debugEnabled) => ({
  debug: (message) => {
    if (debugEnabled) {
      let chalkChain = chalk[COLOR_CODES.DEBUG];
      console.log(chalkChain(message));
    }
  },
  error: (message) => {
    let chalkChain = chalk.bold[COLOR_CODES.ERROR];
    console.log(chalkChain(message));
  },
  info: (message) => {
    let chalkChain = chalk[COLOR_CODES.INFO];
    console.log(chalkChain(message));
  },
  log: (message) => {
    if (debugEnabled) {
      let chalkChain = chalk[COLOR_CODES.DEFAULT];
      console.log(chalkChain(message));
    }
  },
  warn: (message) => {
    if (debugEnabled) {
      let chalkChain = chalk.bold[COLOR_CODES.WARN];
      console.log(chalkChain(message));
    }
  }
});
