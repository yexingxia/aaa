# BEST123

Navigation website for best fans.

## 简易使用说明

1.  安装FIS3：命令行执行`npm install -g fis3`，安装成功后fis3就成为一个全局命令，执行`fis3 -v`可以看到fis3版本

2.  执行`fis3 server start`启动FIS3的服务器，默认占用**8080**端口，可以在命令后接参数`--port xxxx`来指定其他端口

3.  进入best123目录下，执行`npm install`安装package.json中指定的依赖

4.  本地开发时请执行`fis3 release`编译代码并发布到本地环境，访问http://localhost:xxxx/page/index即可访问到页面，可以加参数`-w`来监听修改做热替换

5.  远程发布时，分为两步：

    a) 确保远程环境可以接收代码：在远程环境的/home/appadmin/best123目录下安装receiver组件（[安装方法](https://github.com/fex-team/receiver)），安装完成后会生成一个receiver目录，进入receiver目录下执行`node server.js`，默认占用**8999**端口

    b) 确保本地环境可以发布代码：请执行`fis3 release [media]`把编译打包后的代码发布到对应环境上。目前预设了四种media: dev-本地（可省略）；test-测试环境；prod_1-线上环境1；prod_2-线上环境1

FIS3进一步的细节可参考[FIS3官网](http://fis.baidu.com)
