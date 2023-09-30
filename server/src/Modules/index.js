const glob = require('glob');
const path = require('path');

const moduleFiles = glob.sync(path.join(__dirname, '/**/*.module.js'));

const exportedModule = {};

moduleFiles.forEach(moduleFile => {
  const moduleName = path.basename(moduleFile, '.module.js');
  const module = require(moduleFile);
  exportedModule[moduleName] = module;
});

module.exports = exportedModule;
