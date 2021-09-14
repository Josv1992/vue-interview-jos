require = require('esm')(module);
const { routes } = require('./src/routes.js');

module.exports = {
  pluginOptions: {
    sitemap: {
      baseURL: 'https://example.com',
      routes,
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