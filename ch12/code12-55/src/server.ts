import 'angular2-universal-polyfills' ;
import './_workaround.server';

var express = require( 'express' );
var bodyParser = require( 'body-parser' );

import { enableProdMode } from '@angular/core';
import { createEngine } from 'angular2-express-engine';
import { ServerModule } from './server.module';

enableProdMode();

var app = express();
app.set( 'port', 4200 );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
app.engine('.html', createEngine({
  ngModule: ServerModule
}));
app.set('view engine', 'html');

function ngApp(req, res) {
  res.render('index', {
    req : req,
    res : res,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: `http://localhost:${ app.get('port') }`
  });
}

app.get('/', ngApp);

app.use('/public', express.static('public'));

app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = { status: 404, message: 'No Content' };
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

app.listen(app.get( 'port' ), function() {
    console.log( "server listening on 4200 ..." );
});
