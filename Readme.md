# can-stream-rxjs

[![Build Status](https://travis-ci.org/web-mech/can-stream-rxjs.svg?branch=master)](https://travis-ci.org/web-mech/can-stream-rxjs)

Stream values into and out of computes using can-stream + rxjs

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