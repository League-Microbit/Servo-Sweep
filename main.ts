servos.P0.setRange(0, 180)
basic.forever(function () {
    for (let index = 0; index <= 180; index++) {
        servos.P0.setAngle(index)
        basic.pause(100)
    }
    for (let index = 0; index <= 180; index++) {
        servos.P0.setAngle(180 - index)
        basic.pause(100)
    }
})
