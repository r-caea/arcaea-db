'use strict'

import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Import JSON file as a JSON object
 *
 * @param {string} path - a path to the JSON file
 * @returns {any} - a JSON object
 * @private
 */
function _toJSON(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

const partners = _toJSON(join(__dirname, '/db/partners.json'))
const songs = _toJSON(join(__dirname, '/db/songs.json'))

export { partners, songs }
