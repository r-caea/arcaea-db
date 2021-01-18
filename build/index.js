'use strict'

const songs = require('./songs.json')
const packs = require('./packs.json')
const side = require('./side.json')

const fs = require('fs')

const dbSongs = {
  packs,
  side,
  songs
}

fs.writeFileSync(
  `${process.cwd()}/db/songs.json`,
  JSON.stringify(dbSongs, null, 2),
  'utf8'
)
