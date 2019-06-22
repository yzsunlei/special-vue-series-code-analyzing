/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  // 插件调用函数
  Vue.use = function (plugin: Function | Object) {
    // 判断当前插件是否已经安装过
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    // 安装插件
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
