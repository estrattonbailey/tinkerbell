export default function tinkerbell (b, e, d, ease) {
  b = Math.round(b)
  e = Math.round(e)
  const c = e - b

  return function tween (cb, done) {
    let ts
    let stopped
    let frame
    let last
    let next

    frame = (function tick (last) {
      return requestAnimationFrame(t => {
        if (!ts) ts = t
        last = next || b
        next = Math.round(ease(t - ts, b, c, d))
        if ((e > b ? next < e && last <= e : next > e && last >= e) && !stopped) {
          tick(next)
          cb(next)
        } else {
          done && done()
          stopped = true
          cancelAnimationFrame(frame)
        }
      })
    })(b)

    return function stop () {
      cancelAnimationFrame(frame)
      stopped = true
    }
  }
}
