var path = require( 'path' );

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  target : 'web',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [ root('node_modules') ]
  },
  entry: [ './src/polyfill.ts', './src/main.ts' ],
  output: {
    filename: 'bundle.js',
    path:  path.resolve( __dirname, 'dist' ),
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
