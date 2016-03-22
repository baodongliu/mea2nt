"use strict";
var config = require('../config');
var route = require('../../src/core/server/routes/core.server.routes');
var path_1 = require('path');
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
function preconfigExpress() {
    var app = express();
    if (config.ENV === 'prod') {
        app.use(compress());
    }
    else {
        app.use(morgan('dev'));
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    route.routes(app);
    app.use(express.static(path_1.normalize(__dirname)));
    return app;
}
exports.preconfigExpress = preconfigExpress;
//# sourceMappingURL=express.js.map