const glob = require('glob');
const path = require('path');

const dtoFiles = glob.sync(path.join(__dirname, '**/*.dto.js'));

const exportedDto = {};

dtoFiles.forEach(dtoFile => {
  const dtoName = path.basename(dtoFile, '.dto.js');
  const dto = require(dtoFile);
  exportedDto[dtoName] = dto;
});

module.exports = exportedDto;
