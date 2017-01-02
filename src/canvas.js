class Canvas {
  constructor (canvas) {
    this.cvs = canvas
    this.ctx = canvas.getContext('2d')
    this.width = 0
    this.height = 0
  }

  adjustResolution (window) {
    const dpr = window.devicePixelRatio || 1
    const bsr = this.ctx.webkitBackingStorePixelRatio ||
                this.ctx.mozBackingStorePixelRatio ||
                this.ctx.msBackingStorePixelRatio ||
                this.ctx.oBackingStorePixelRatio ||
                this.ctx.backingStorePixelRatio || 1

    const ratio = dpr / bsr

    this.cvs.width = this.width * ratio
    this.cvs.height = this.height * ratio
    this.cvs.style.width = this.width + 'px'
    this.cvs.style.height = this.heigh + 'px'
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
  }

  drawLine (from, to) {
    this.ctx.beginPath()
    this.ctx.moveTo(from.x, from.y)
    this.ctx.lineTo(to.x, to.y)
    this.ctx.stroke()
  }
}

module.exports = Canvas
