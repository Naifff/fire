buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    if (_switch == 0) {
        k += 0.05
    } else {
        delay += 5
    }
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    if (_switch == 0) {
        _switch = 1
    } else {
        _switch = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (a == 0) {
        a = 1
        led.enable(true)
    } else {
        a = 0
        led.enable(false)
    }
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    if (_switch == 0) {
        k += -0.05
    } else {
        delay += -5
    }
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    a = 0
    led.enable(true)
    led.setBrightness(255)
    proportionalFont.showSpace(5, 150)
    proportionalFont.showString("k = " + k + ", delay = " + delay, 150)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let b = 0
let delay = 0
let _switch = 0
let k = 0
let a = 0
a = 0
let c = 255
k = 0.15
_switch = 0
delay = 150
led.enable(false)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (a == 1) {
        b = randint(0, 255)
        for (let index = 0; index < 5; index++) {
            c = c + (b - c) * k
            led.setBrightness(c)
            basic.pause(delay)
        }
    }
})
