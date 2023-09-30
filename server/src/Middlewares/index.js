const glob = require('glob');
const path = require('path');

const middlewareFiles = glob.sync(path.join(__dirname, '*.middleware.js'));

const exportedMiddlewares = {};

middlewareFiles.forEach(middlewareFile => {
  const middlewareName = path.basename(middlewareFile, '.middleware.js');
  const middleware = require(middlewareFile);
  exportedMiddlewares[middlewareName] = middleware;
});

module.exports = exportedMiddlewares;
