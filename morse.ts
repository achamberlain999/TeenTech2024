input.onButtonPressed(Button.A, function () {
  radio.sendString(".");
  basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `);
  basic.pause(100);
  basic.clearScreen();
});
input.onButtonPressed(Button.AB, function () {
  radio.sendString(" ");
  basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        `);
  basic.pause(100);
  basic.clearScreen();   
});
radio.onReceivedString(function (receivedString) {
  if (receivedString == ".") {
    basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `);
    basic.pause(100);
    basic.clearScreen();
  } else if (receivedString == "-") {
    basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `);
    basic.pause(100);
    basic.clearScreen();
  } else if (receivedString == " ") {
    basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # # # # #
            `);
    basic.pause(100);
    basic.clearScreen();
  }
});
input.onButtonPressed(Button.B, function () {
  radio.sendString("-");
  basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `);
  basic.pause(100);
  basic.clearScreen();
});
input.onGesture(Gesture.Shake, function () {
  for (let index = 0; index < 4; index++) {
    radio.sendString(".");
    radio.sendString(".");
    radio.sendString(".");
    radio.sendString(" ");
    basic.pause(2000);
    radio.sendString("-");
    radio.sendString("-");
    radio.sendString("-");
    radio.sendString(" ");
    basic.pause(2000);
    radio.sendString(".");
    radio.sendString(".");
    radio.sendString(".");
    radio.sendString(" ");
    basic.pause(2000);
  }
});
radio.setGroup(1);
