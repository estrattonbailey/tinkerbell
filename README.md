# tinkerbell
Tiny tweening library that sparkles. **200 bytes gzipped.**

## Install
```
npm i tinkerbell --save
```

# Usage
```javascript
import tinkerbell from 'rosin'

function easeInOut (t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b
  return -c / 2 * ((--t) * (t - 2) - 1) + b
}

const tween = tinkerbell(0, 500, 1000, easeInOut)

/** on each tick */
function tick (val) {}

/** on complete */
function done () {}

const stop = tween(tick, done)

/** stop animation in progress */
stop()
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
