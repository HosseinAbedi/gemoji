import assert from 'node:assert'
import fs from 'node:fs'
import fetch from 'node-fetch'

fetch('https://api.github.com/repos/github/gemoji/contents/db/emoji.json', {
  headers: {Accept: 'application/vnd.github.v3.raw'}
}).then((response) => {
  assert(response.body, 'expected body')
  response.body.pipe(fs.createWriteStream('emoji.json'))
})
