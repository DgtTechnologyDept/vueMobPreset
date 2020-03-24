function renderFiles(api) {
  api.render({
    './src/icon/index.js': '../template/src/icon/index.js',
    './src/icon/svg/user.svg': '../template/src/icon/svg/user.svg',
    './src/components/SvgIcon/Index.vue': '../template/src/components/SvgIcon/Index.vue'
  })
}

module.exports = {
  renderFiles
}
