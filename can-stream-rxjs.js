const canStreamX = require('can-stream-x');

const { Observable } = require('rxjs');

module.exports = canStreamX({
    streamConstructor: Observable.create,
    emitMethod: 'next',
    on: 'subscribe',
    off: 'unsubscribe'
});