function renderFiles(api) {
  api.render({
    './.env': '../template/_env',
    './.env.development': '../template/_env.development',
    './.env.production': '../template/_env.production',
    './.env.test': '../template/_env.test'
  })
}

module.exports = {
  renderFiles
}
