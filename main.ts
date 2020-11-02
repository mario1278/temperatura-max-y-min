input.onPinPressed(TouchPin.P0, function () {
    if (TOTAL_TEMPERATURA != 0) {
        PROMEDIO_TEMPERATURA = suma + TOTAL_TEMPERATURA
    }
    basic.showNumber(PROMEDIO_TEMPERATURA)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(MIN)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    TOTAL_TEMPERATURA += 1
    TOTAL_TEMPERATURA = input.temperature()
    suma = TOTAL_TEMPERATURA
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MAX)
    basic.clearScreen()
})
let suma = 0
let TOTAL_TEMPERATURA = 0
let PROMEDIO_TEMPERATURA = 0
let MIN = 0
let MAX = 0
let TEMPERATURA_ACTUAL = input.temperature()
MAX = TEMPERATURA_ACTUAL
MIN = TEMPERATURA_ACTUAL
PROMEDIO_TEMPERATURA = 0
let MEDIA = 0
basic.forever(function () {
    basic.showString("...")
    TEMPERATURA_ACTUAL = input.temperature()
    if (TEMPERATURA_ACTUAL < MIN) {
        MIN = TEMPERATURA_ACTUAL
    }
    if (TEMPERATURA_ACTUAL > MAX) {
        MAX = TEMPERATURA_ACTUAL
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
