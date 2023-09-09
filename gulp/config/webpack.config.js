const config = {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    app: './src/js/app.js',
    index: './src/js/index.js',
    about: './src/js/about.js',
  },
  output: {
    filename: '[name].min.js',
  },
};

module.exports = config;
