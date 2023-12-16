const EventEmittter = require('events')

const emitter = new EventEmittter()

emitter.on('anything', data => {
    console.log('ON: anuything', data)
})

emitter.emit('anything', {a: 1})

emitter.emit('anything', {b: 2})

setTimeout(() => {
    emitter.emit('anything', {c: 7})
}, 3000)


class Dispatcher extends EventEmittter {
    subscribe(eventname, callback) {
        console.log('[Subscribe...]')
        this.on(eventname, callback)
    }

    dispatch(eventname, data) {
        console.log('[Dispatching...]')
        this.emit(eventname, data)
    }
}

const disp = new Dispatcher()

disp.subscribe('event1', data => {
    console.log('ON: event1', data)
})

disp.dispatch('event1', {event1: 'first'})