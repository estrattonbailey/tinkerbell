export default function tinkerbell (b, e, d, ease) {
  const c = e - b

  return function tween (cb, done) {
    let ts = Date.now()
    let stopped
    let frame
    let next

    frame = (function tick (last) {
      return requestAnimationFrame(t => {
        next = Math.round(ease(Date.now() - ts, b, c, d))
        if ((e < b ? next > e : next < e) && !stopped) {
          tick(next)
          cb(next)
        } else {
          done && done()
        }
      })
    })(b)

    return function stop () {
      cancelAnimationFrame(frame)
      stopped = true
    }
  }
}
