const css             = require('css');
const addIterations   = require('css-ast-iterations');

const ecss = () => {
  return {
    process(stylesheet, inputPath) {
      const ast = css.parse(stylesheet);
      addIterations(ast);
      console.log('stylesheet', ast);

      ast.findAllRules((rule, ruleIndex) => {
        console.log(rule);
      });
    }
  }
};

module.exports = ecss;