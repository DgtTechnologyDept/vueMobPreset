function renderFiles (api) {
  api.render({
    './src/utils/http.js': '../template/src/utils/http.js',
    './src/api/home.js': '../template/src/api/home.js',
  })
}

module.exports = {
  renderFiles
}
