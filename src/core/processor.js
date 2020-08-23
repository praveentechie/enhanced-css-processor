const css             = require('css');
const cssom           = require('cssom');

const ecss = () => {
  return {
    process(stylesheet, inputPath) {
      const ast = cssom.parse(stylesheet);
      //addIterations(ast);
      // console.log('stylesheet', ast.cssRules);

      ast.cssRules.forEach(rule => {
        console.log('rule ', rule.style);
        let index = 0;
        while (index < rule.style.length) {
          console.log('style', rule.style[index]);
          console.log('style value', rule.style[rule.style[index]]);
          index++;
        }
      })
      // ast.findAllRules((rule, ruleIndex) => {
      //   console.log(rule);
      // });
    }
  }
};

module.exports = ecss;