function renderFiles (api) {
  api.render({
    './src/main.js': '../template/src/main.js'
  })
}

module.exports = {
  renderFiles
}
