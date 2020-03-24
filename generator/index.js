module.exports = (api, options) => {
  const axios = require('./tools/axios')
  const main = require('./tools/main')
  const env = require('./tools/env')
  const vuex = require('./tools/vuex')
  const svgIcon = require('./tools/svgIcon')

  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      axios: '^0.19.0',
      moment: '^2.24.0',
      'normalize.css': '^8.0.1',
      'amfe-flexible': '^2.2.1',
      'postcss-pxtorem': '^4.0.1'
    },
    devDependencies: {
      'css-loader': '^3.2.0',
      'style-loader': '^1.0.0',
      'node-sass': '^4.12.0',
      'sass-loader': '^8.0.0',
      'svg-sprite-loader': '^4.2.1',
      'babel-plugin-import': '^1.12.2'
    }
  })

  // 渲染公共文件
  axios.renderFiles(api)
  main.renderFiles(api)
  env.renderFiles(api)
  vuex.renderFiles(api)
  svgIcon.renderFiles(api)

  // 渲染VantUI插件
  api.render({
    './src/plugins/vant.js': './template/src/plugins/vant.js'
  })
  // 配置按需引入ElementUI组件
  api.render({
    './babel.config.js': './template/babel.config.js'
  })
  //  渲染vue.config.js
  api.render({
    './vue.config.js': './template/vue.config.js'
  })
}
