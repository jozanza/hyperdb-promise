# hyperdb-promise

[![NPM Version](https://img.shields.io/npm/v/hyperdb-promise.svg?style=flat)](https://www.npmjs.org/package/hyperdb-promise)

HyperDB but with promises instead of callbacks

```
npm install hyperdb-promise
```

## Usage

``` js
import HyperDB from 'hyperdb-promise'

const db = new HyperDB('./my.db', { valueEncoding: 'utf-8' })

db.on('ready', async () => {
  await db.put('/hello', 'world')
  const [value] = await db.get('/hello')
  console.log(`/hello --> ${value}`)
})
```

Basically, any db instance method that previously accepted a callback as a final argument is now promisified. 

Visit the [the original HyperDB repo](https://github.com/mafintosh/hyperdb) to get more familiar with the API.
