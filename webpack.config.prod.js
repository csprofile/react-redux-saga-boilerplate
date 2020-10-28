const path =  require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {};

config.target = 'web';
config.mode = 'production';
config.context = __dirname;

config.entry = './app/Index.tsx';
config.output = {
  path: path.join(__dirname, 'dist'),
  filename: '[name][hash]bundle.js',
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
  new CleanWebpackPlugin({
    dry: false,
    cleanStaleWebpackAssets: false,
    cleanOnceBeforeBuildPatterns: [
      path.join(__dirname, 'dist', '**/*')
    ],
    dangerouslyAllowCleanPatternsOutsideProject: false,
  }),
  new HTMLWebpackPlugin({
    template: path.join(__dirname, 'webpacktemplate.html'),
  })
];

module.exports = config;
