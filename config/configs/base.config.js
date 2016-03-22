"use strict";
var yargs_1 = require('yargs');
var path_1 = require('path');
exports.ENVIRONMENTS = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};
var BaseConfig = (function () {
    function BaseConfig() {
        this.PORT = yargs_1.argv['port'] || 3000;
        this.PROJECT_ROOT = path_1.normalize(__dirname);
        this.INDEX_FILE = path_1.normalize(path_1.join(__dirname, '../../src/core/server/views/index.server.view.html'));
        this.ENV = getEnvironment();
        this.APP_TITLE = 'Maili Education';
        this.SESSION_SECRET = getSessionSecret();
    }
    return BaseConfig;
}());
exports.BaseConfig = BaseConfig;
function getEnvironment() {
    var base = yargs_1.argv['_'];
    var prodKeyword = !!base.filter(function (o) { return o.indexOf(exports.ENVIRONMENTS.PRODUCTION)
        >= 0; }).pop();
    if (base && prodKeyword || yargs_1.argv['env'] === exports.ENVIRONMENTS.PRODUCTION) {
        return exports.ENVIRONMENTS.PRODUCTION;
    }
    else {
        return exports.ENVIRONMENTS.DEVELOPMENT;
    }
}
function getSessionSecret() {
    var env = getEnvironment();
    if (env === exports.ENVIRONMENTS.PRODUCTION) {
        return 'productionSessionSecret';
    }
    else {
        return 'developmentSessionSecret';
    }
}
//# sourceMappingURL=base.config.js.map