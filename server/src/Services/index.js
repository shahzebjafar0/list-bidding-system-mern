const glob = require('glob');
const path = require('path');

const serviceFiles = glob.sync(path.join(__dirname, '*.service.js'));

const exportedServices = {};

serviceFiles.forEach(serviceFile => {
  const serviceName = path.basename(serviceFile, '.service.js');
  const service = require(serviceFile);
  exportedServices[serviceName] = service;
});

module.exports = exportedServices;
