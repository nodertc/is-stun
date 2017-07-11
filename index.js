'use strict'

const inRange = require('number-in-range')
const min = 0
const max = 3

module.exports = isStun

function isStun(packet) {
  if (Buffer.isBuffer(packet) && packet.length > 0) {
    return inRange(packet[0], min, max)
  }

  throw new TypeError('Argument 1 should be a Buffer.')
}
