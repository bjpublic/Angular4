const fs = require('fs');
const path = require('path');

import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';

var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var preboot = require( 'preboot' );

import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';

import { AppServerModule } from './appserver.module';

enableProdMode();

var app = express();
app.set( 'port', 4200 );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var inlinePrebootCode = preboot.getInlineCode( { appRoot : 'app'} );
var browserPrebootCode = fs.readFileSync( "./node_modules/preboot/__dist/preboot_browser.js", { encoding : 'utf8'});

app.engine('html', function( filePath, options, callback ) {
	let file = fs.readFileSync(filePath, { encoding : 'utf8'});
	
	renderModule( AppServerModule, {
		document: file,
		url: options.url
	}).then( html => {
		html = html.replace( "</head>",
			"<script>" + inlinePrebootCode + "</script>" +
			"<script>" + browserPrebootCode + "</script>" +
			"</head>" );
		callback( null, html );
	});
});
app.set('view engine', 'html');

app.get('/', function( req, res ) {
    res.render( "index", { url : req.url } );
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
