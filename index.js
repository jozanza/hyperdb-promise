const HyperDB = require('hyperdb')
const { promisify } = require('es6-promisify')
module.exports = class extends HyperDB {
  constructor(...args) {
    super(...args)
    for (const k of [
      'version',
      'put',
      'get',
      'del',
      'batch',
      'authorize',
      'authorized',
      'list',
    ])
      this[k] = promisify(this[k])
  }
}
