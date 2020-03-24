function renderFiles(api) {
  api.render({
    './src/store/index.js': '../template/src/store/index.js',
    './src/store/getters.js': '../template/src/store/getters.js',
    './src/store/modules/base.js': '../template/src/store/modules/base.js'
  })
}

module.exports = {
  renderFiles
}
