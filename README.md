# 项目介绍
react + react-router-dom + redux + typescript

# 启动方式
npm run start

# 打包
npm run build

# react devtools调试工具调试报错：
react-refresh-runtime.development.js:488 Uncaught TypeError: Cannot read property 'forEach' of undefined
    at Object.injectIntoGlobalHook (react-refresh-runtime.development.js:488)
    at Object../node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js (ReactRefreshEntry.js:17)
    at Object.options.factory (react refresh:6)
    at __webpack_require__ (bootstrap:24)
    at startup:4
    at startup:7

解决方法：
1、找到路径 node modules\@pmmmwh\react-refresh-webpack-plugin\client 下得 ReactRefreshEntry.js文件,注释掉 RefreshRuntime.injectIntoGlobalHook(safeThis); 重新启动即可!
2、升级React Developer Tools 3 到 React Developer Tools 4




