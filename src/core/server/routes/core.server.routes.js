"use strict";
var ctrl = require('../controllers/core.server.controller');
function routes(app) {
    app.get('/', ctrl.render);
}
exports.routes = routes;
//# sourceMappingURL=core.server.routes.js.map