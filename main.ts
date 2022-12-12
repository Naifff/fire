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
let c = 255
led.enable(false)
led.plot(0, 0)
led.plot(1, 0)
led.plot(2, 0)
led.plot(3, 0)
led.plot(4, 0)
led.plot(0, 1)
led.plot(1, 1)
led.plot(2, 1)
led.plot(3, 1)
led.plot(4, 1)
led.plot(0, 2)
led.plot(1, 2)
led.plot(2, 2)
led.plot(3, 2)
led.plot(4, 2)
led.plot(0, 3)
led.plot(1, 3)
led.plot(2, 3)
led.plot(3, 3)
led.plot(4, 3)
led.plot(0, 4)
led.plot(1, 4)
led.plot(2, 4)
led.plot(3, 4)
led.plot(4, 4)
basic.forever(function () {
    if (a == 1) {
        b = randint(0, 255)
        for (let index = 0; index < 50; index++) {
            c = c + (b - c) * 0.01
            led.setBrightness(c)
        }
    }
})
