const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    pathinfo: false,
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        /**
         * Use the `include` field to only apply the loader
         * modules that actually need to be transformed by it.
         */
        // include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    // Minimal Entry Chunk
    runtimeChunk: true,
    // Avoid Extra Optimization Steps
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Performance'
    })
  ]
};
