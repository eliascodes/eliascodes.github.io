const { randomInt, roundToNearestN } = require('./utils.js')
const RandomWalk = require('./rw.js')
const Canvas = require('./canvas.js')

const NUM_RWS = 10
const NUM_STEPS = 1000
const POS_NAME = [window.innerWidth/2, 200]
const POS_SUBTITLE = [window.innerWidth/2, 300]
const SCALE = 15
let CENTRE = [0, 0]
const RADIUS = 150

const initCanvas = () => {
  const canvas = new Canvas(document.querySelector('canvas'))
  canvas.width = window.innerWidth
  canvas.height = document.querySelector('main').getBoundingClientRect().top
  canvas.adjustResolution(window)
  CENTRE = [canvas.width/2, canvas.height/2 * 0.9]
  return canvas
}

const drawName = (canvas) => {
  canvas.ctx.font = '1.5em "Consolas", "Monaco", "Lucida Console", sans-serif'
  canvas.ctx.textAlign = 'center'
  canvas.ctx.fillText('Elias Malik', ...POS_NAME)
  canvas.ctx.fillText('Developer & Analyst', ...POS_SUBTITLE)
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = initCanvas()
  drawName(canvas)

  // canvas.ctx.beginPath()
  // canvas.ctx.arc(...CENTRE, RADIUS, 0, 2*Math.PI)
  // canvas.ctx.stroke()

  const mag = (x, y) => x**2 + y**2
  const centre = (x, y) => [CENTRE[0] - x, CENTRE[1] - y]
  const centredMag = (x, y) => mag(...centre(x, y))
  const uncentre = (x, y) => [CENTRE[0] + x, CENTRE[1] + y]


  const isValidStep = (x, y) => centredMag(x, y) > RADIUS**2

  const createRandomWalk = (limit, scale, xy) => {
    const rw = new RandomWalk()
    rw.x = roundToNearestN(SCALE, xy[0] || randomInt(canvas.width, 0))
    rw.y = roundToNearestN(SCALE, xy[1] || randomInt(canvas.height, 0))
    rw.limit = limit
    rw.scale = scale
    rw.mod.x = canvas.width
    rw.mod.y = canvas.height
    rw.isValidStep = isValidStep
    return rw
  }

  let randomWalks = []
  const theta_step = 2*Math.PI/NUM_RWS
  const angToCoords = (theta, R) => [R * Math.cos(theta), R * Math.sin(theta)]
  for (let ii = 0; ii < NUM_RWS; ii++) {
    randomWalks.push(
      createRandomWalk(
        NUM_STEPS,
        SCALE,
        uncentre(...angToCoords(theta_step*ii, 2*RADIUS))
      )
    )
  }

  const drawFrame = () => {
    randomWalks = randomWalks.filter(w => !w.limitReached())
    randomWalks.forEach(walk => canvas.drawLine(...walk.step()))

    if (randomWalks.length)
      requestAnimationFrame(drawFrame)
  }

  requestAnimationFrame(drawFrame)
})
