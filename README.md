# @syakod/prettier-config

## Installation

```bash
pnpm add -D prettier @syakod/prettier-config
```

## Usage

```jsonc
// prettier.config.cjs
"@syakod/prettier-config"
```

```jsonc
// package.json
{
  "prettier": "@syakod/prettier-config"
}
```

### Extend the config

```js
// prettier.config.cjs
module.exports = {
  ...require('@syakod/prettier-config'),
  semi: false,
}
```

## License

Published under [Apache-2.0 License](./LICENCE).
