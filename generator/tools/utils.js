function renderFiles(api) {
  api.render({
    './src/utils/verifyPlate.js': '../template/src/utils/verifyPlate.js',
    './src/utils/idCardValidate.js': '../template/src/utils/idCardValidate.js',
    './src/utils/routeUtils.js': '../template/src/utils/routeUtils.js'
  })
}

module.exports = {
  renderFiles
}
