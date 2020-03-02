# hello-word

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### 上传文件（大文件）学习笔记

(参考文章)[https://juejin.im/post/5dff8a26e51d4558105420ed]

在某些任务中如果遇到大文件上传，比如上传大文件的视频等，如果文件的体积比较大，或者上传时网络不好的时候，会消耗比较长的时间（需要传输更多的报文，丢包重传的概率也增大）,用户不能重新刷新页面，只能等待。

前端： vue element-ui
后端： node.js

### 基础 axios + node 长传文件（小文件）
