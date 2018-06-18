var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
  target : 'web',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [ path.resolve( __dirname, 'node_modules' ) ]
  },
  entry: [ './src/polyfill.ts', './src/main.aot.ts' ],
  output: {
    filename: 'bundle.aot.treeshaking.js',
    path: path.resolve( __dirname, 'dist' ),
    libraryTarget: 'var'
  },
  module: {
    rules: [
      { test: /\.ts$/,  use: [
        { loader: 'awesome-typescript-loader', query : { configFileName: './tsconfig.es2015.json' } },
        'angular2-template-loader'
      ]},
      { test: /\.html$/, use: 'raw-loader' },
      { test: /\.css$/,  use: 'raw-loader' },
      { test: /\.json$/, use: 'json-loader' }
    ],
  },
  plugins : [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
};
