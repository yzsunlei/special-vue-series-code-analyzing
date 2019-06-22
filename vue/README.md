new Vue()发生了什么？

1）new关键字实例化一个对象，Vue()是一个类，在js中类用Function定义

2）在Vue()函数中调用初始化函数：Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化data、props、computed、watcher 等等。Vue 的初始化逻辑写的非常清楚，把不同的功能逻辑拆成一些单独的函数执行，让主线逻辑一目了然

3）在初始化的最后，检测到如果有 el 属性，则调用 vm.$mount 方法挂载 vm，挂载的目标就是把模板渲染成最终的 DOM

初始化主要干的几件事情：合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化data、props、computed、watcher

在createComponent()中针对组件渲染这个 case 主要就 3 个关键步骤：
构造子类构造函数、安装组件钩子函数、实例化 vnode


组件patch的过程：createComponent  -> 子组件初始化  ->  子组件render -> 子组件patch

Vue.js实现响应式的核心是利用ES5的Object.defineProperty(obj,prop,descriptor)，给对象的属性添加getter  setter，返回这个对象

在Vue中响应式对象有：props  data   computed  watcher  methods（如果子属性为对象，则递归的把该对象变成响应式的）


实现数据绑定的做法有大致如下几种：

发布者-订阅者模式（backbone.js）

脏值检查（angular.js） 

数据劫持（vue.js）

订阅器：dep.depend()、dep.notify()



