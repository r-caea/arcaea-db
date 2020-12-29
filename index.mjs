'use strict'

import { readFileSync } from 'fs'

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

const partners = _toJSON('./db/partners.json')
const songs = _toJSON('./db/songs.json')

export { partners, songs }
