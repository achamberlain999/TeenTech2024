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
radio.setGroup(1);
