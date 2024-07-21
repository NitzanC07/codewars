/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 */

const longestPalindrome = (s) => {
  let n = s.length;
  // dp[i][j] will be 'true' if the string from index i to j is a palindrome.
  let dp = Array.from(Array(n), () => Array(n).fill(false));

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  let maxLength = 1;
  let start = 0;

  // Check for substring of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for substrings of length > 2
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;
      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;
        start = i;
        maxLength = len;
      }
    }
  }

  // Extracting the longest palindromic substring
  let result = s.substring(start, start + maxLength);
  return result;
};

const showResult = longestPalindrome("abade");
console.log(showResult);
