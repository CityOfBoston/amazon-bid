/* eslint no-console: 0 */
import Hapi from 'hapi';
import Inert from 'inert';
import fs from 'fs';

let uuid = 1; // Use seq instead of proper unique identifiers for demo only

const users = {
  amazon: {
    id: 'amazon',
    password: '79boszl7fbd',
  },
};

const port = parseInt(process.env.PORT || '3000', 10);
const login = function(request, reply) {
  if (request.auth.isAuthenticated) {
    return reply.redirect('/');
  }

  let message = '';
  let account = null;

  if (request.method === 'post') {
    if (!request.payload.password) {
      message = 'Missing password';
    } else {
      account = users['amazon'];
      if (!account || account.password !== request.payload.password) {
        message = 'Invalid password';
      }
    }
  }

  console.log(message);

  if (request.method === 'get' || message) {
    return reply.file('login.html');
  }

  const sid = String(++uuid);
  request.server.app.cache.set(sid, { account: account }, 0, err => {
    if (err) {
      reply(err);
      return;
    }

    request.cookieAuth.set({ sid: sid });
    return reply.redirect('/');
  });
};

export async function makeServer() {
  const server = new Hapi.Server();

  const tls = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt'),
  };

  server.connection({ port, tls }, '0.0.0.0');

  server.register(require('hapi-auth-cookie'), err => {
    if (err) {
      throw err;
    }

    const cache = server.cache({
      segment: 'sessions',
      expiresIn: 3 * 24 * 60 * 60 * 1000,
    });
    server.app.cache = cache;

    server.auth.strategy('session', 'cookie', true, {
      password: 'M0rJiRhQGfR6Fotg&ua$q_I@#-HZ8EIm',
      cookie: 'auth',
      redirectTo: '/login',
      isSecure: false,
      validateFunc: function(request, session, callback) {
        callback(null, !!session.sid);
        // cache.get(session.sid, (err, cached) => {
        //   if (err) {
        //     return callback(err, false);
        //   }

        //   if (!cached) {
        //     return callback(null, false);
        //   }

        //   return callback(null, true, cached.account);
        // });
      },
    });
  });

  // server.auth.scheme(
  //   'headerKeys',
  //   (s, { keys, header }: { header: string, keys: string[] }) => ({
  //     authenticate: (request, reply) => {
  //       const key = request.headers[header.toLowerCase()];
  //       if (!key) {
  //         reply(Boom.unauthorized(`Missing ${header} header`));
  //       } else if (keys.indexOf(key) === -1) {
  //         reply(Boom.unauthorized(`Key ${key} is not a valid key`));
  //       } else {
  //         reply.continue({ credentials: key });
  //       }
  //     },
  //   })
  // );

  // server.auth.strategy('apiKey', 'headerKeys', {
  //   header: 'X-API-KEY',
  //   keys: process.env.API_KEYS
  //     ? process.env.API_KEYS.split(',')
  //     : ['test-api-key'],
  // });

  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/admin/ok',
    handler: (request, reply) => reply('ok'),
    config: {
      auth: false,
      // mark this as a health check so that it doesn’t get logged
      tags: ['health'],
    },
  });

  server.route({
    method: ['GET', 'POST'],
    path: '/login',
    config: {
      handler: login,
      auth: { mode: 'try' },
      plugins: { 'hapi-auth-cookie': { redirectTo: false } },
    },
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    config: {
      // auth: false,
    },
    handler: {
      directory: {
        path: 'public', //Path.join(__dirname, '..', 'public'),
        redirectToSlash: true,
        index: true,
      },
    },
  });

  // server.route({
  //   method: 'GET',
  //   path: '/{path*}',
  //   handler: (request, reply) => {
  //     if (request.params.path.indexOf('..') !== -1) {
  //       return reply(Boom.forbidden());
  //     }

  //     const p = Path.join('public', ...request.params.path.split('/'));
  //     console.log(p);
  //     return reply.file(p);
  //   },
  // });

  return {
    server,
  };
}

makeServer()
  .then(({ server }) => server.start())
  .then(
    () => {
      console.log(`> Ready on https://localhost:${port}`);
    },
    err => {
      throw err;
    }
  );
