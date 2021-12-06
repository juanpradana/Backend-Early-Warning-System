const {
  addDataHandler,
  getAllDataHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/datas',
    handler: addDataHandler,
  },
  {
    method: 'GET',
    path: '/datas',
    handler: getAllDataHandler,
  },
];

module.exports = routes;
