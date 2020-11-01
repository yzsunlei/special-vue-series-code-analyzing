/* @flow */

export * from 'shared/util' //公用的工具函数
export * from './lang'
export * from './env' // 运行环境判断
export * from './options' // 配置上的一些处理函数
export * from './debug' // debug信息相关处理函数
export * from './props' // props相关处理函数
export * from './error' // 错误信息相关处理函数
export * from './next-tick'
export { defineReactive } from '../observer/index' // 发布-订阅机制相关
