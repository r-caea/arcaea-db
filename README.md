# Arcaea Resource Database
> Package storing the latest data of songs and partners for Arcaea

## Disclaimer
This repository (and package) is intended for personal use only.

## Elements
- Partners (`db/partners.json`)
- Songs (`db/songs.json`)

## Installation
```sh
npm i @r-caea/arcaea-db 
```

## Usage
```javascript
// CommonJS
const { partners, songs } = require('@r-caea/arcaea-db')
```

## Build
```sh
npm i
npm run build -- <BotArcAPI release version>  # e.g. npm run build -- 0.2.4
```

## Credits
- [BotArcAPI](https://github.com/TheSnowfield/BotArcAPI) for song database
- [@tnptop](https://github.com/tnptop) for partner database

## License
Licensed under `MIT License`
