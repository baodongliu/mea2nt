/// <reference path="./typings/browser.d.ts" />
import {preconfigExpress} from './config/lib/express';
import * as express from 'express';

var app = preconfigExpress();

// app.use('/', (req: express.Request, res: express.Response) => {
  // res.send('Hello World');
// });

app.listen(3000);

console.log('Sever running at htpp://localhost:3000');

