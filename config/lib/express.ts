import * as config from '../config';
import route = require('../../src/core/server/routes/core.server.routes');
import {normalize, join} from 'path';
import * as express from 'express';
import * as morgan from 'morgan';
import * as compress from 'compression';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
//import * as session from 'express-session';


export function preconfigExpress() {
  var app = express();

  if (config.ENV === 'prod') {
    app.use(compress());
  } else {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // app.use(session({
  //   saveUninitialized: true,
  //   resave: true,
  //   secret: config.SESSION_SECRET
  // }));

  // app.set('views', normalize(join(__dirname, 'src/core/server/views')));
  // app.set('view engine', 'ejs');

  route.routes(app);

  app.use(express.static(normalize(__dirname)));

  return app;
}

