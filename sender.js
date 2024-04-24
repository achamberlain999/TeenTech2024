input.onButtonPressed(Button.A, function () {
    radio.sendString(".")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
function send_o () {
    for (let index = 0; index < 3; index++) {
        radio.sendString("-")
        basic.pause(1000)
    }
}
function send_space () {
    radio.sendString(" ")
    basic.pause(1000)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendString(" ")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == ".") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (receivedString == "-") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (receivedString == " ") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("-")
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    send_s()
    send_space()
    send_o()
    send_space()
    send_s()
    send_space()
})
function send_s () {
    for (let index = 0; index < 3; index++) {
        radio.sendString(".")
        basic.pause(1000)
    }
}
radio.setGroup(1)
