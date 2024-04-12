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
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `);
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
    currentWord = "" + currentWord + ".";
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
    currentWord = "" + currentWord + "-";
    basic.pause(100);
    basic.clearScreen();
  } else if (receivedString == " ") {
    basic.showString("" + morseCodeValues[currentWord]);
    currentWord = "";
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
let currentWord = "";
radio.setGroup(1);
let morseCodeValues: { [key: string]: string } = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};
