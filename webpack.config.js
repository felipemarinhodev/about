const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:10004/',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    port: 10004,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'App',
    }),
    new ModuleFederationPlugin({
      name: 'AboutApp',
      filename: 'remoteEntry.js',
      exposes: {
        './AboutPage': './src/About',
      },
      shared: {
        react: {
          requiredVersion: '17.0.2',
          singleton: true,
          strictVersion: true,
        },
        'react-dom': {
          requiredVersion: '17.0.2',
          singleton: true,
          strictVersion: true,
        },
      },
    }),
  ],
  mode: 'production',
};
