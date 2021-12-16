const {
  addDataHandler,
  getAllDataHandler,
  getDataByCodeUnitHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/datas/{codeUnit}',
    handler: addDataHandler,
  },
  {
    method: 'GET',
    path: '/datas',
    handler: getAllDataHandler,
  },
  {
    method: 'GET',
    path: '/datas/{codeUnit}',
    handler: getDataByCodeUnitHandler,
  },
];

module.exports = routes;
