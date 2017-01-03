const { randomInt, roundToNearestN, coordTransform, polar2cartesian, range } = require('./utils.js')
const RandomWalk = require('./rw.js')
const Canvas = require('./canvas.js')

const NUM_RWS = 10
const NUM_STEPS = 1000
const SCALE = 15
let CENTRE = [0, 0]
const RADIUS = 150

const initCanvas = () => {
  const canvas = new Canvas(document.querySelector('canvas'))
  canvas.width = window.innerWidth
  canvas.height = document.querySelector('main').getBoundingClientRect().top
  canvas.adjustResolution(window)
  CENTRE = [canvas.width/2, canvas.height/2]
  return canvas
}

const drawName = (canvas, cnt) => {
  const POS_NAME     = [cnt[0], cnt[1]*0.9]
  const POS_HANDLE   = [cnt[0], cnt[1]*1.0]
  const POS_SUBTITLE = [cnt[0], cnt[1]*1.1]

  canvas.ctx.font = '1.5em "Consolas", "Monaco", "Lucida Console", sans-serif'
  canvas.ctx.textAlign = 'center'
  canvas.ctx.fillText('Elias Malik', ...POS_NAME)
  canvas.ctx.font = '0.8em "Consolas", "Monaco", "Lucida Console", sans-serif'
  canvas.ctx.fillText('@eliascodes', ...POS_HANDLE)
  canvas.ctx.fillText('Developer & Analyst', ...POS_SUBTITLE)
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = initCanvas()
  drawName(canvas, CENTRE)

  const mag = (x, y) => x**2 + y**2
  const centredMag = (x, y) => mag(...coordTransform(CENTRE, [x, y]))
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

  let randomWalks =
    range(0, NUM_RWS)
      .map(ii  => 2 * Math.PI / ii)                           // equally spaced points around unit circle
      .map(ang => polar2cartesian(ang, 2 * RADIUS))           // transform to xy-coords in CENTRE-frame
      .map(xy  => coordTransform(xy, CENTRE.map(v => -v)))    // transform to xy-coords in canvas-frame
      .map(xy  => createRandomWalk(NUM_STEPS, SCALE, ...xy))  // create RandomWalk instance

  const drawFrame = () => {
    randomWalks = randomWalks.filter(w => !w.limitReached())
    randomWalks.forEach(walk => canvas.drawLine(...walk.step()))

    if (randomWalks.length)
      requestAnimationFrame(drawFrame)
  }

  requestAnimationFrame(drawFrame)
})
