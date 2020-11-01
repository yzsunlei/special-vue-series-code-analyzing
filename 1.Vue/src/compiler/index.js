/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 1.parse，模板字符串 转换成 抽象语法树(AST)
  const ast = parse(template.trim(), options)
  // 2.optimize，对 AST 进行静态节点标记
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  // 3.generate，抽象语法树(AST) 生成 render函数代码字符串
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
