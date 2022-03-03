const removeOutmostChar = function (string) {
  return string.substring(1, string.length - 1);
}

const isPalindrome = function (string) {
  if (string.length <= 1) {
    return true;
  }
  const lastIndex = string.length - 1;

  return (string[0] === string[lastIndex]) ? isPalindrome(removeOutmostChar(string)) : false;
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