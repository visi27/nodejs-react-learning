const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/App.jsx'],
    vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    port: 8000,
    contentBase: 'static',
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000'
      }
    }
  }
}
