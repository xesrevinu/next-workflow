#next workflow
一个为追求快速开发node模块 or JS应用打造的工作环境(使用最新的ES6甚至更加新的ES7...)
采用babel编译代码,让你可以用es6甚至es7写代码
fork项目,基于这个模板编写你的javascript应用或者Node模块

***
[![build status][travis-image]][travis-url]

##目录介绍
```
lib/
src/
test/
```
先从src说起,你的项目代码都写在``src/``里面,得益于babel你可以使用最新的ES6语法,没了解过的可以到[这里][1]看下.
write code......done
代码写了,怎么运行呢?

先介绍一下`` package.json ``,里面有``scripts``字段,里面定义了几个script

 1. `` test `` 这个大家都懂的对``test``目录下所有文件进行测试
 2. `` build `` 将``src``目录下所有你用ES6写的代码下的文件扔给babel编译,文件会编译到`` lib ``目录下,具体编译设置可看`` .babelrc ``
 3. `` build-watch `` 执行`` build ``的同时会watch`` build ``目录下所有文件,如有变动会自动编译到`` lib ``目录下
 4. `` eslint `` 对`` src ``下所有文件进行语法检查,怎样检查?请看`` .eslintrc ``如果你用的编辑器是`` sublime-test `` or ``atom`` or `` webstorm ``之类的或者装了插件,就不需要自己手动输命令了,插件会自动找寻当前项目里的`` .eslintrc ``这时候就会自动检查语法,但是会对所有文件检查,`` .eslintignore ``就发挥用处了,指出不需要进行检查的.

接着上面说,怎么运行呢?

先编译``` npm run build ```或者你在开发的时候用``` npm run build-watch ```
(`` build ``的同时会帮你进行`` eslint ``)
写了测试的跑测试``` npm run test ```
发布到npm上或者push到github上吧
然后修改自己项目持续集成地址,看status.
为什么没```js node xx.js ``` 或者 ```js xxx xxx.js ```之类的呢?
(因为懒)
简单的小项目,大家可以自行改造.

至此介绍完毕thanks


### 测试
```js
npm run test
```

### 编译
```js
npm run build
```

### 实时编译
```js
npm run build-watch
```

[1]: https://github.com/lukehoban/es6features "这里"
[travis-image]:https://img.shields.io/travis/xiaokekeT/next-workflow/master.svg?style=flat-square
[travis-url]:https://travis-ci.org/xiaokekeT/next-workflow
