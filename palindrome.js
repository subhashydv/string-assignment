const isPalindrome = function (string) {
  let lastIndex = string.length - 1;

  for (let index = 0; index < (string.length / 2); index++) {
    if (string[index] !== string[lastIndex--]) {
      return false;
    }
  }
  return true;
}

const testIsPalindrome = function (string, expectedOutput, message) {
  let mark = "✓";
  if (isPalindrome(string) !== expectedOutput) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const testCasesIsPalindrome = function () {
  testIsPalindrome("a", true, "single letter word");
  testIsPalindrome("aa", true, "double letter word with same character");
  testIsPalindrome("ab", false, "double letter word with different character");
  testIsPalindrome("aba", true, "three letter word");
}

testCasesIsPalindrome();