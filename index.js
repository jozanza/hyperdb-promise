import HyperDB from 'hyperdb'
import { promisify } from 'es6-promisify'

export default class extends HyperDB {
  constructor(...args) {
    super(...args)
    for (const k of [
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
