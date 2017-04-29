# can-stream-rxjs

Stream values into and out of computes using any streaming lib.
Great for streaming libs that return emitters as a callback.

## Syntax

```
canStream.toStream([compute]);

canStream.toCompute([stream]);
```

## Example Usage

### toStream
```
var canStream = require('can-stream-rxjs');

var c = compute(0);

var stream = canStream.toStream(c);

var computeVal;

stream.subscribe((newVal) => {
	computeVal = newVal;
});

c(1);

console.log(computeVal); //1
```


### toCompute
```
const c = canStream.toCompute(setStream => setStream);

c(5);
// listen to the compute for it to have a value
c.on('change', () => {});

// immediate value
c() //5
```

## testing

```
npm test
```