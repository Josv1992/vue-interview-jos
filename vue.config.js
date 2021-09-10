// require = require('esm')(module);
// const { routes } = require('./src/routes.js');

module.exports = {
  pluginOptions: {
    sitemap: {
      urls: [
        'https://example.com/',
        'https://example.com/about',
      ]
    }
  },
  configureWebpack: {
    plugins: [],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  },
}