function renderFiles(api) {
  api.render({
    './.env': '../template/_env',
    './.env.development': '../template/_env.development',
    './.env.production': '../template/_env.production',
    './.env.testpdct': '../template/_env.testpdct'
  })
}

module.exports = {
  renderFiles
}
