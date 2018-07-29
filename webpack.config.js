var path = require('path')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
//require dotenv and optionally pass path/to/.env
var DotEnv = require('dotenv').config({path: __dirname + '/.env'}),
      webpack = require('webpack'),

//Then define a new webpack plugin which reads the .env variables at bundle time
dotEnv = new webpack.DefinePlugin({
  "process.env": {
    'BASE_URL': JSON.stringify(process.env.BASE_URL),
    'PORT': JSON.stringify(process.env.PORT)
  }
});

module.exports = {
  entry: {
    index: './views/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'build.js'
  },
  plugins:[
    new webpack.ProvidePlugin({   
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new VueLoaderPlugin(),
    dotEnv
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
         loaders: {
           'scss': 'vue-style-loader!css-loader!sass-loader',
           'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
         }
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
}
