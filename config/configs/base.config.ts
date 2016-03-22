import {readFileSync} from 'fs';
import {argv} from 'yargs';
import {normalize, join} from 'path';
import {Environments} from './base.config.interface.ts';

export const ENVIRONMENTS: Environments = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod'
};

export class BaseConfig {
  PORT = argv['port'] || 3000;
  PROJECT_ROOT = normalize(__dirname);
  INDEX_FILE = normalize(join(__dirname, 
    '../../src/core/server/views/index.server.view.html'));
  ENV = getEnvironment();

  APP_TITLE = 'Maili Education';

  SESSION_SECRET = getSessionSecret();
}

function getEnvironment() {
  let base: string[] = argv['_'];
  let prodKeyword = !!base.filter(o => o.indexOf(ENVIRONMENTS.PRODUCTION) 
                                  >= 0).pop();
  if (base && prodKeyword || argv['env'] === ENVIRONMENTS.PRODUCTION) {
    return ENVIRONMENTS.PRODUCTION;
  } else {
    return ENVIRONMENTS.DEVELOPMENT;
  }
}

function getSessionSecret() {
  let env = getEnvironment();
  if (env === ENVIRONMENTS.PRODUCTION) {
    return 'productionSessionSecret';
  } else {
    return 'developmentSessionSecret';
  }
}
