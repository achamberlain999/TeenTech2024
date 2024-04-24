const radioGroup = 0

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
  basic.showString("" + (radioGroup.toString()));
  basic.pause(100);
  basic.clearScreen();
});
input.onButtonPressed(Button.A, function () {
  basic.showString("" + (radioGroup.toString()));
  basic.pause(100);
  basic.clearScreen();
});
radio.setGroup(radioGroup);
