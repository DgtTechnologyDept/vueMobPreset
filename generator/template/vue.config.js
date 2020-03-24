'use strict'
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({    //  px to rem
                        rootValue: 37.5, // 换算的基数
                        selectorBlackList: [], // 忽略转换正则匹配项
                        propList: ['*'],
                    })
                ]
            }
        }
    },
    devServer: {
        proxy: {
            [process.env.VUE_APP_HOST]: {
                target: '',
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_HOST]: ''
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            // 自定义别名
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icon'))
            .end()
        config.module
            .rule('icon')
            .test(/\.svg$/)
            .include.add(resolve('src/icon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}