const fs = require('fs');
const path = require('path');

import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';

var express = require( 'express' );
var bodyParser = require( 'body-parser' );

import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';

import { AppServerModule } from './appserver.module';
import { Cache } from './cache';

enableProdMode();

var app = express();
app.set( 'port', 4200 );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', function( filePath, options, callback ) {
	let file = fs.readFileSync(filePath, { encoding : 'utf8'});
	
	let inst = new Cache();

	renderModule( AppServerModule, {
		document: file,
		url: options.url,
		extraProviders : [
			{ provide : 'baseUrl', useValue : 'http://localhost:4200' },
			{ provide : Cache, useValue : inst }
		]
	}).then( html => {
		let cacheData = JSON.stringify( inst.data );

		html = html.replace( "</head>",
			"<script>var CACHE_DATA = " + cacheData + ";</script>" +
			"</head>" );
		callback( null, html );
	});
});
app.set('view engine', 'html');

app.get('/', function( req, res ) {
    res.render( "index", { url : req.url } );
});

app.get('/getData', function( req, res )
{
    console.log( "getData Requested" );
    res.json( { data : "hello" } );
});

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
