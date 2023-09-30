const glob = require('glob');
const path = require('path');

const utilFiles = glob.sync(path.join(__dirname, '*.util.js'));

const exportedUtils = {};

utilFiles.forEach(utilFile => {
  const utilName = path.basename(utilFile, '.util.js');
  const util = require(utilFile);
  exportedUtils[utilName] = util;
});

module.exports = exportedUtils;
