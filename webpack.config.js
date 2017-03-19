module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: './public'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
