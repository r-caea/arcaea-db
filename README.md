# Arcaea Resource Database
> Package storing the latest data of songs and partners for Arcaea

## Disclaimer
This repository (and package) is intended for personal use only.

## Elements
- Partners (`db/partners.json`)
- Songs (`db/songs.json`

## Installation
```sh
# have to specify this version until the newer version comes out
npm i @r-caea/arcaea-db@3.4.0-patch 
```

## Usage
```javascript
// CommonJS
const { partners, songs } = require('@r-caea/arcaea-db')

// ES6
import { partners, songs } from '@r-caea/arcaea-db'
```

## Credits
- [BotArcAPI](https://github.com/TheSnowfield/BotArcAPI) for song database
- Myself for partner database

## License
Licensed under `MIT License`
