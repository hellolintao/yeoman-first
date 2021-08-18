const consola = require('consola')

// See types section for all available types

// consola.success('Built!')
// consola.info('Reporter: Some info')
// consola.error(new Error('Foo'))


// function mockFn (type) {
//   if (type === 'info') {
//     return () => this.log('INFO INFO INFO')
//   }
// }

// consola.info('before')

// consola.mockTypes(mockFn)

// const tagged = consola.withTag('newTag')

// consola.log('log is not mocked!')

// consola.info('Dont see me')
// tagged.info('Dont see me too')

consola.withTag('hello').log('world')

consola.silent('silent!') // 避而不谈的
consola.fatal('fatal!') // 毁灭性的
consola.error('error!') // 错误
consola.warn('warn!') // 警告
consola.log('log!') // 普通打印
consola.info('info!') // 蓝色信息
consola.success('success!') // 绿色成功
consola.debug('debug!') // 
consola.trace('trace!') // 
consola.verbose('verbose!') // 冗长的
consola.ready('ready!') // 绿色 准备完成
consola.start('start!') // 绿色 开始