module.exports = {
    entry: './src/app.js',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    }
  };