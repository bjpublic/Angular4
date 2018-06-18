var path = require( 'path' );

module.exports = {
  target : 'web',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [ path.resolve( __dirname, 'node_modules' ) ]
  },
  entry: [ './src/polyfill.ts', './src/main.ts' ],
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, 'dist' ),
    libraryTarget: 'var'
  },
  module: {
    rules: [
      { test: /\.ts$/,   use: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.html$/, use: 'raw-loader' },
      { test: /\.css$/,  use: 'raw-loader' },
      { test: /\.json$/, use: 'json-loader' }
    ],
  }
};
