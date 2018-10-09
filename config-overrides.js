const { injectBabelPlugin } = require('react-app-rewired')

module.exports = (config, env) => {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  )
  return config;
};