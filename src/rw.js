const { randomInt } = require('./utils.js')

const limit = (min, max, num) => Math.max(min, Math.min(max, num))

class RandomWalk {
  constructor () {
    this.x = 0
    this.y = 0
    this.mod = { x: 1, y: 1 }
    this.limit = 100
    this.steps = 0
    this.scale = 1
    this.isValidStep = () => true
  }

  limitReached () {
    return this.steps >= this.limit
  }

  step () {
    if (this.limitReached())
      return

    const { x: prev_x, y: prev_y } = this;
    const [ delta_x, delta_y ] = [randomInt(1, -1), randomInt(1, -1)].map(e => e * this.scale)
    const next_x = limit(0, this.mod.x, this.x + delta_x)
    const next_y = limit(0, this.mod.y, this.y + delta_y)

    if (this.isValidStep(next_x, next_y)) {
      this.x = limit(0, this.mod.x, this.x + delta_x)
      this.y = limit(0, this.mod.y, this.y + delta_y)
      this.steps++
    }

    return [{x: prev_x, y: prev_y}, {x: this.x, y: this.y}]
  }
}

module.exports = RandomWalk
