const reverse = function (string) {
  const lastIndex = string.length - 1;
  let reversedString = "";

  for (let index = lastIndex; index >= 0; index--) {
    reversedString = reversedString.concat(string[index]);
  }
  return reversedString;
}

const testReverse = function (string, expectedOutput, message) {
  let mark = "✓";
  if (reverse(string) !== expectedOutput) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const testCasesReverse = function () {
  testReverse("hello", "olleh", "should reverse the string");
}

testCasesReverse();