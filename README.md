# test_project


使用 vue/cli 脚手架生成得项目，支持在发布系统直接发布，
需要改造得地方又如下2点 ：

- 步骤一：需要添加 configs/webpack.params.js,并按照标准前端项目写入 标准的 path 变量，参考该项目下的文件
- 步骤二：需要定义2个npm 命令，分别是 dist 和 release，参考 package.json，因为线上机子的打包测试和打包正式都是这2个命令
- 步骤三：要让打包出来得文件分别放在 dist 目录和 release 目录下。参考 vue.config.js 得内容。

按照以上步骤修改以后就可以在前端发布系统去添加项目了，发布系统会自己执行 npm install ,创建项目的时候告诉 QA node 版本选择v10就好，如果配置中有疑问或问题请咨询 hztangzhao@corp.netease.com

**PS：以上步骤建议大家在初始化项目以后就执行，免得后续出现纰漏**

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
