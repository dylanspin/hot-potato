let ended = 0
let activateTimer = 0
let Timer = 0
input.onButtonPressed(Button.A, function () {
    if (ended != 1 && ended != 2) {
        basic.clearScreen()
        activateTimer = randint(5, 10)
        ended = 1
    }
})
basic.forever(function () {
    if (ended == 1) {
        if (Timer <= activateTimer) {
            Timer = Timer + 1
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(100)
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
        } else {
            basic.clearScreen()
            ended = 2
        }
    } else if (ended == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        basic.showIcon(IconNames.Skull)
        basic.clearScreen()
        basic.pause(500)
        ended = 0
    } else {
        basic.showString("A")
    }
})
