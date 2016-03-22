"use strict";
var config = require('../../../../config/config');
function render(req, res) {
    res.sendFile(config.INDEX_FILE);
}
exports.render = render;
//# sourceMappingURL=core.server.controller.js.map