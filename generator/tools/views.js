function renderFiles(api) {
  api.render({
    './src/views/Home/Index.vue': '../template/src/views/Home/Index.vue',
  })
}

module.exports = {
  renderFiles
}
