const withCSS = require('@zeit/next-css');
const compose = require('next-compose')

module.exports = compose([
  [withCSS, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    }
  }],
  {
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      }
  
      return config
    }
  }
])