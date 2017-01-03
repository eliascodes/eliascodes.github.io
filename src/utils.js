const random = exports.random = (max, min) => min + (max - min) * Math.random()
const randomInt = exports.randomInt = (max, min) => Math.round(random(max, min))

exports.randomUnit = (max, min) => {
  const coords = [random(max, min), random(max, min)]
  const mag = coords.map((e) => e^2).reduce((a, b) => a + b, 0)
  return coords.map(e => e / mag)
}

exports.roundToNearestN = (n, num) =>
  Math.round(num / n) * n

exports.polar2cartesian = (theta, r) =>
  [r * Math.cos(theta), r * Math.sin(theta)]

exports.coordTransform = (origin, vector) =>
  origin.map((a, i) => a - vector[i])

exports.range = (a, b) => [...Array(b - a + 1).keys()].map(v => v + a)
