# is-stun

[![Build Status](https://travis-ci.org/reklatsmasters/is-stun.svg?branch=master)](https://travis-ci.org/reklatsmasters/is-stun)
[![npm](https://img.shields.io/npm/v/is-stun.svg)](https://npmjs.org/package/is-stun)
[![node](https://img.shields.io/node/v/is-stun.svg)](https://npmjs.org/package/is-stun)
[![license](https://img.shields.io/npm/l/is-stun.svg)](https://npmjs.org/package/is-stun)
[![downloads](https://img.shields.io/npm/dm/is-stun.svg)](https://npmjs.org/package/is-stun)

Check if a Buffer is a STUN message. Used for demultiplex packets that are arriving on the same port.

## Usage

```js
const dgram = require('dgram')
const is_stun = require('is-stun')

const socket = dgram.createSocket('udp4')

socket.on('message', (packet) => {
  if (is_stun(packet)) {
    // handle STUN...
  }
})

socket.bind(0)
```

## Related projects

* [`is-dtls`](https://github.com/reklatsmasters/is-dtls)
* [`is-turn`](https://github.com/reklatsmasters/is-turn)
* [`is-rtp`](https://github.com/reklatsmasters/is-rtp)

## License

MIT, 2017 (c) Dmitry Tsvettsikh
