const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  target: [
    'node',
  ],
  entry: {
    client: path.resolve(__dirname, 'src/client.jsx'),
    server: path.resolve(__dirname, 'src/server.jsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin(
      {
        patterns: [
          { from: 'public', to: '.' },
        ],
      },
    ),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
