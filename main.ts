let lichteinfall = 0
basic.forever(function () {
    lichteinfall = input.lightLevel()
    pins.analogWritePin(AnalogPin.P0, lichteinfall * 3)
    basic.pause(200)
})
