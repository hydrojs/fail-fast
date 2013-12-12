[![NPM
version](https://badge.fury.io/js/hydro-fail-fast.png)](http://badge.fury.io/js/hydro-fail-fast)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-fail-fast.png)](http://travis-ci.org/hydrojs/hydro-fail-fast)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-fail-fast/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-fail-fast?branch=master)

# hydro-fail-fast

## Synopsis

Abort hydro tests on first failure.

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-fail-fast'],
  'fail-fast': true,
});
```

CLI:

```bash
$ hydro --fail-fast
```

## Installation

#### npm:

```bash
npm install hydro-fail-fast
```

#### component:

```bash
component install hydrojs/hydro-fail-fast
```

#### standalone:

```bash
<script src="hydro-fail-fast.js"></script>
```

## Tests

```bash
$ npm test
```

Coverage:

```bash
$ npm run coverage
```

## License

The MIT License (see LICENSE)
