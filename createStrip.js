const isSpace = function (character) {
  return character === " ";
}

const removeSpace = function (string) {
  let strippedString = "";

  for (let index = 0; index < string.length; index++) {
    if (!isSpace(string[index])) {
      strippedString = strippedString.concat(string[index]);
    }
  }
  return strippedString;
}

const testRemoveSpace = function (string, expectedOutput, message) {
  let mark = "✓";
  if (removeSpace(string) !== expectedOutput) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const testCasesRemoveSpace = function () {
  testRemoveSpace("hello world", "helloworld", "string contains space between words");
  testRemoveSpace(" hi", "hi", "string contains space in start");
  testRemoveSpace("hi ", "hi", "string contains space in end");
}

testCasesRemoveSpace();
