export default function tinkerbell (b, e, d, ease) {
  return function tween (cb, done) {
  	let te
    let ts
    let frame
    let last
    let next

    frame = (function tick (last) {
      return requestAnimationFrame(t => {
        if (!ts) ts = t
        te = t - ts
        next = Math.round(ease(te, b, e - b, d))
        if ((e > b ? next < e && last <= e : next > e && last >= e) && te <= d) {
          frame = tick(next)
          cb(next)
        } else {
        	cb(e)
          done && done()
        }
      })
    })(b)

    return function stop () {
      cancelAnimationFrame(frame)
    }
  }
}
