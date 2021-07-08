var path = require('path');

module.exports = {
  // Change to your "entry-point".
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'i18nextSaga',
    libraryTarget: 'umd',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  externals: {
    i18next: {
      commonjs: 'i18next',
      commonjs2: 'i18next',
      amd: 'i18next',
      root: 'i18next',
    },
    'redux-saga/effects': {
      commonjs: 'redux-saga/effects',
      commonjs2: 'redux-saga/effects',
      amd: 'redux-saga/effects',
      root: 'ReduxSaga.effects',
    },
    redux: {
      commonjs: 'redux',
      commonjs2: 'redux',
      amd: 'redux',
      root: 'redux',
    },
  },
};
