# a Vue CLI preset for Mobile Web Application
>基于`@vue/cli` 4.0的项目文件生成插件，<a href="https://cli.vuejs.org/zh/guide/plugins-and-presets.html#preset" target="_blank">点我</a>查看具体介绍。
## 安装
`vue create --preset DgtTechnologyDept/vueMobPreset my-project`
## 多环境变量
- `.env` 所有环境中都会载入该文件下的变量
- `.env.development` 在`serve`时载入
- `.env.production` 在`build`时载入
- `.env.testpdct` 在`npm run test-build`时载入，主要用于定义打包测试环境的配置参数，该模式下的`NODE_ENV`为`production`
## 移动端适配
>脚手架已基于`Rem`实现了适配方案
### 设置viewport
通过`preset`创建的项目已默认为`public/index.html`文件设置以下meta  
`<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">`
### Rem适配
使用了以下依赖实现
- <a href="https://github.com/amfe/lib-flexible" target="_blank">amfe-flexible</a>：匹配不同尺寸的设备，为根元素`html`匹配不同的`font-size`。
- <a href="https://github.com/cuth/postcss-pxtorem" target="_blank">postcss-pxtorem</a>：将`px`转为`rem`就可以根据`html`的`font-size`计算值的大小。
## 预装依赖
### ***<a href="https://router.vuejs.org/zh/" target="_blank">Vue-Router</a>***
### ***<a href="https://vuex.vuejs.org/zh/" target="_blank">Vuex</a>***
- `preset`已将`store`分割成模块(`module`)，每个模块拥有自己的 `state`、`mutation`、`action`，建议不同模块都独立放在`src/store/modules`目录中。
- 在导出`store`的`src/store/index.js`文件中已通过`require.context`API加载`src/store/modules`下的所有不同模块的`state`。
- 使用时，建议在`src/store/getters.js`中暴露不同模块的`state`。

`state`暴露用例如下：
```
const getters = {
  // 暴露base模块中的status状态
  status: state => state.base.status
}
export default getters
```
组件中访问`state`用例如下：
```
this.$store.getters.status
```

---

### ***<a href="https://youzan.github.io/vant/#/zh-CN/" target="_blank">VantUI</a>***

该`preset`以`VantUI`作为主要UI组件库，已借助<a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a>配置按需引入组件，在`src/plugins/vant.js`中对所需组件做增减即可。
```
//  src/plugins/vant.js
import Vue from 'vue'
import {
  Button,
  Toast
} from 'vant'

Toast.setDefaultOptions('loading', { forbidClick: true, duration: 0 })
Toast.setDefaultOptions('success', { forbidClick: true, duration: 1500 })
Toast.setDefaultOptions('fail', { forbidClick: true, duration: 1500 })

Vue.use(Button)
Vue.use(Toast)
```

---
### ***<a href="http://www.axios-js.com/" target="_blank">Axios</a>***
- 在`src/utils/http.js`中已针对`axios`封装请求拦截器及响应拦截器，并针对常见的请求失败响应状态码进行了字面映射。若遇到符合的请求失败响应码，会调用`VantUI Toast`组件发起提示。最后，`http.js`分别暴露了`post`及`get`方法供项目使用。
- 项目涉及的API接口建议放在`src/api`目录下，针对不同模块将API置于不同命名的`js`文件中。以下以`src/api/home.js`接口文件为例：
```
//  home.js
import { post } from '@/utils/http'
const Host = process.env.VUE_APP_HOST + '/home'

/**
 * 查询接口
 * @param {请求参数} param
 */
export function getList(param) {
  return post({
    url: Host + '/getList',
    param
  })
}
```
具体使用：
```
// home.vue
<script>
import { getList } from '@/api/home'
export default {
  mounted () {
    getList({ param: 'example' })
      .then(res => {})
      .catch(error => {})
  }
}
</script>
```
---
### Svg-Icon
该`preset`已在`src/components/SvgIcon`中封装了可复用的`svg-icon`，并已在`main.js`中注册为全局组件，使用前需将`svg`文件放在`src/icon/svg`目录中。使用例子如下：
```
// home.vue
<template>
  <div class="home">
    // iconClass属性的值为对应svg的文件名
    <svg-icon iconClass="user" />
  </div>
</template>
```
## 最后：开发小建议
### 组件存放
- 可复用的公共组件以语义化命名放在`src/components`下，如`components/SvgIcon/Index.vue`为可复用的`svg-icon`组件。
- 页面级别的组件放在`src/views`下，如主页的组件：`views/Home/Index.vue`
### 路由页面异步加载
eg: `component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Index.vue')`
### 抽离公共方法
如：
- 字段正则校验方法
- 请求体加密计算函数
- formatter
- mapper
- ...
