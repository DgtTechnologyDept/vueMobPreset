function renderFiles(api) {
  api.render({
    './src/utils/xlsx.js': '../template/src/utils/xlsx.js'
  })
}

module.exports = {
  renderFiles
}
