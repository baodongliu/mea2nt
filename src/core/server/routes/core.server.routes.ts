import ctrl = require('../controllers/core.server.controller');

function routes (app) {
  app.get('/', ctrl.render);
}

export {routes};

