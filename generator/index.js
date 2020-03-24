module.exports = (api, options) => {
  const axios = require('./tools/axios')
  const main = require('./tools/main')
  // const utils = require('./tools/utils')
  const env = require('./tools/env')
  const vuex = require('./tools/vuex')
  const svgIcon = require('./tools/svgIcon')

  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      axios: '^0.19.0',
      moment: '^2.24.0',
      'normalize.css': '^8.0.1',
      nprogress: '^0.2.0',
      'element-ui': '^2.13.0',
      'js-md5': '^0.7.3',
    },
    devDependencies: {
      'css-loader': '^3.2.0',
      'style-loader': '^1.0.0',
      'node-sass': '^4.12.0',
      'sass-loader': '^8.0.0',
      'svg-sprite-loader': '^4.2.1',
      'babel-plugin-component': '^1.1.1'
    }
  })

  // 渲染公共文件
  axios.renderFiles(api)
  main.renderFiles(api)
  // utils.renderFiles(api)
  env.renderFiles(api)
  vuex.renderFiles(api)
  svgIcon.renderFiles(api)

  // 渲染ElementUI插件
  api.render({
    './src/plugins/element.js': './template/src/plugins/element.js'
  })
  // 配置按需引入ElementUI组件
  api.render({
    './babel.config.js': './template/babel.config.js'
  })
  //  渲染vue.config.js
  api.render({
    './vue.config.js': './template/vue.config.js'
  })

  // 预置 xlsx 组件
  if (options.xlsx) {
    api.extendPackage({
      devDependencies: {
        'xlsx': '^0.15.3'
      }
    })
    let xlsx = require('./tools/xlsx')
    xlsx.renderFiles(api)
  }
}
