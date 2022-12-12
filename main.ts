input.onButtonPressed(Button.A, function () {
    a = 0
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {
    a = 1
    led.enable(true)
})
let b = 0
let a = 0
a = 0
basic.forever(function () {
    if (a == 1) {
        b = randint(0, 255)
        if (b <= 50) {
            b = 0
        } else if (b <= 100) {
            b = 50
        } else if (b <= 150) {
            b = 100
        } else if (b <= 200) {
            b = 150
        } else {
            b = 255
        }
        led.plotBrightness(randint(0, 4), randint(0, 4), b)
        basic.pause(20)
    }
})
