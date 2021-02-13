'use strict'

const fs = require('fs')
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const columnNames = [
  'sid',                 'name_en',
  'name_jp',             'bpm',
  'bpm_base',            'pakset as pack',
  'artist',              'time',
  'side',                'date',
  'world_unlock',        'remote_download',
  'rating_pst',          'rating_prs',
  'rating_ftr',          'rating_byn',
  'difficultly_pst',     'difficultly_prs',
  'difficultly_ftr',     'difficultly_byn',
  'chart_designer_pst',  'chart_designer_prs',
  'chart_designer_ftr',  'chart_designer_byn',
  'jacket_designer_pst', 'jacket_designer_prs',
  'jacket_designer_ftr', 'jacket_designer_byn'
]

async function connect (dbPath) {
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  })
}

async function convertSqliteToJSON (sqlitePath) {
  const db = await connect(sqlitePath)
  return await db.all(`select ${columnNames.join(', ')} from songs`)
}

function writeToDb (data, path) {
  fs.writeFileSync(
    path,
    JSON.stringify(data, null, 2),
    'utf8'
  )
}

(async () => {
  console.log('Building new db...')
  const packs = require('./packs.json')
  const sides = require('./sides.json')
  const songs = await convertSqliteToJSON(`${process.cwd()}/build/arcsong.db`)

  writeToDb({ packs, sides, songs }, `${process.cwd()}/db/songs.json`)
  console.log('Finish building!')
})()
