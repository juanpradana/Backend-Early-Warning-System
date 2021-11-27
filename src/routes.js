const {
  addBookHandler,
  getAllBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/datas',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/datas',
    handler: getAllBookHandler,
  },
];

module.exports = routes;
