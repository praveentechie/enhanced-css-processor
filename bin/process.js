#!/usr/bin/env node

const fs          = require('fs');
const { Command } = require('commander');
const package     = require('../package.json');
const processor   = require('../src/ecss.js');

// ### cli input - default list of aruguments
// processor(process.argv);

function _prepareForProcessing (program) {
  _readFileForProcessing(program.input, program.output);
}

function _readFileForProcessing (inputPath, outputPath) {
  fs.readFile(inputPath, 'utf-8', (err, data) => {
    console.log(err, data);
    processor(data, inputPath);
  });
}

const program = new Command();

program
  .version(package.version)
  .description(package.description)
  .option('-d, --debug', 'output extra debugging')
  .requiredOption('-i, --input <type>', 'input file name')
  .option('-o, --output <type>', 'output file name')
  .arguments('<inputFile>')
  .parse(process.argv);

_prepareForProcessing(program);