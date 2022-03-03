const isConsonant = function (char) {
  const consonant = "bcdfghjklmnpqrstvwxyz";
  return consonant.includes(char.toLowerCase());
}

const countConsonant = function (string) {
  let consonantCount = 0;

  for (let index = 0; index < string.length; index++) {
    if (isConsonant(string[index])) {
      consonantCount++;
    }
  }
  return consonantCount;
}

const testCountConsonant = function (string, expectedOutput, message) {
  let mark = "✓";
  if (countConsonant(string) !== expectedOutput) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const testCasesCountConsonant = function () {
  testCountConsonant("hi", 1, "String contains single Consonant");
  testCountConsonant("hey", 2, "String contains two Consonants");
  testCountConsonant("hello hi", 4, "String contains spaces in between words");
}

testCasesCountConsonant();