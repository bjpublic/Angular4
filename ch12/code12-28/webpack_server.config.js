var path = require( 'path' );

module.exports = {
  target : 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [ path.resolve( __dirname, 'node_modules' ) ]
  },
  entry: './src/server.ts',
  output: {
    filename: 'bundle_server.js',
    path: path.resolve( __dirname, './dist' ),
    libraryTarget: 'commonjs2'
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
