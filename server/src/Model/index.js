const glob = require('glob');
const path = require('path');

const modelFiles = glob.sync(path.join(__dirname, '*.schema.js'));

const exportedModels = {};

modelFiles.forEach(modelFile => {
  const modelName = path.basename(modelFile, '.schema.js');
  const model = require(modelFile);
  exportedModels[modelName] = model;
});

module.exports = exportedModels;
