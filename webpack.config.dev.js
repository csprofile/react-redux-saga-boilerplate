const path =  require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {};

config.target = 'web';
config.mode = 'development';
config.context = __dirname;
config.devtool = 'eval';

config.entry = './app/Index.tsx';
config.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: 'dist'
};
config.resolve = {
  extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
  modules: [
    'node_modules',
    __dirname,
  ]
};
config.module = {
  rules: [
    {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }
  ]
}

config.plugins = [
  new HTMLWebpackPlugin({
    template: path.resolve(__dirname, 'dist', 'index.html'),
  })
];
config.devServer = {
  contentBase: path.join(__dirname, 'dist'),
  watchContentBase: true,
  compress: true,
  port: 3000,
  historyApiFallback: {
    tool: 'index.html'
  },
  publicPath: '/',
  hot: true,
  open: true,
  openPage: 'http://127.0.0.1:8080/dist',
}; 

module.exports = config;
