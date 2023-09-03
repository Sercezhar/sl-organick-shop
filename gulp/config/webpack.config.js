const config = {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    app: './src/js/app.js',
  },
  output: {
    filename: '[name].min.js',
  },
};

module.exports = config;
