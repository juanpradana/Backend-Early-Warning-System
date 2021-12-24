const Hapi = require('@hapi/hapi');
const fs = require('fs');
const routes = require('./routes');

const tls = {
  key: fs.readFileSync('127.0.0.1.key'),
  cert: fs.readFileSync('127.0.0.1.cert'),
};

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 433,
    host: '0.0.0.0',
    // eslint-disable-next-line object-shorthand
    tls: tls,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
