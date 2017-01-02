const { compose, sum } = require('ramda')

const random = exports.random = (max, min) => min + (max - min) * Math.random()
const randomInt = exports.randomInt = compose(Math.round, random)

exports.randomUnit = (max, min) => {
  const coords = [random(max, min), random(max, min)]
  const mag = coords.map((e) => e^2).reduce(sum, 0)
  return coords.map(e => e / mag)
}

exports.roundToNearestN = (n, num) => Math.round(num / n) * n
