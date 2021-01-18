'use strict'

import fs from 'fs'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const { writeFile } = fs.promises

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

(async () => {
  const db = await connect('arcsong.db')
  let res = await db.all(`select ${columnNames.join(', ')} from songs`)
  await writeFile('songs.json', JSON.stringify(res, null, 2), 'utf8')
})()
