const isVowel = function (alphabet) {
  const vowels = "aeiou";
  const lowerCaseChar = alphabet.toLowerCase()
  return vowels.includes(lowerCaseChar);
}

const countVowel = function (string) {
  let vowelCount = 0;

  for (let index = 0; index < string.length; index++) {
    if (isVowel(string[index])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

const testCountVowel = function (string, expectedOutput, message) {
  let mark = "✓";
  if (countVowel(string) !== expectedOutput) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const testCasesCountVowel = function () {
  testCountVowel("hi", 1, "String contains single vowel");
  testCountVowel("hello", 2, "String contains two vowels");
  testCountVowel("hello hi", 3, "String contains spaces in between word");
}

testCasesCountVowel();
