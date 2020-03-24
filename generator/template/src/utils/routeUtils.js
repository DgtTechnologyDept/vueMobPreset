/**
 * 格式化动态路由数组，通过require引入所需组件
 * @param {符合vueRouter结构的路由数组} routes 
 */
export const formatRoutes = (routes)=> {
  let fmRoutes = []
  routes.forEach(router=> {
    let {
      path,
      component,
      name,
      meta,
      children,
      redirect,
      filePath
    } = router
    let fmRouter = {
      path: path,
      component(resolve){
        require([`@/${filePath}/${component}.vue`], resolve)
      },
      name: name,
      meta: meta
    };
    if (redirect) fmRouter.redirect = redirect
    if (children && children instanceof Array) {
      children = formatRoutes(children)
      fmRouter.children = children
    }
    fmRoutes.push(fmRouter)
  })
  return fmRoutes
}
