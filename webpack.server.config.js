/* This config file is only for transpiling the Express server file.
 * You need webpack-node-externals to transpile an express file
 * but if you use it on your regular React bundle, then all the 
 * node modules your app needs to function get stripped out.
 *
 * Note: that prod and dev mode are set in npm scripts.
 */
 const path = require('path')
 const webpack = require('webpack')
 const nodeExternals = require('webpack-node-externals')

 module.exports = (env, argv) => {
   const SERVER_PATH = (argv.mode === 'production') ?
     './src/server/server-prod.js' :
     './src/server/server-dev.js'

   return ({
     entry: {
       server: SERVER_PATH,
     },
     output: {
       path: path.join(__dirname, 'dist'),
       publicPath: '/',
       filename: '[name].js'
     },
     mode: argv.mode,
     target: 'node',
     node: {
       // Need this when working with express, otherwise the build fails
       __dirname: false,   // if you don't put this is, __dirname
       __filename: false,  // and __filename return blank or /
     },
     externals: [nodeExternals()], // Need this to avoid error when working with Express
     module: {
       rules: [
         {
           // Transpiles ES6-8 into ES5
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: "babel-loader"
           }
         }
       ]
     }
   })
 }

// Webpack 4 basic tutorial:
// https://www.valentinog.com/blog/webpack-4-tutorial/#webpack_4_production_and_development_mode

// Development mode is optimized for build speed and does nothing more than providing an un-minified bundle.
// Production mode enables all sorts of optimizations like minification, scope hoisting, tree-shaking and more.