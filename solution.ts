/**
 * Problem: @link https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Solution:
 * Check if the input is palindromic, and if so, return it. Otherwise
 * Perform a breadth-first search across substrings
 */


/**
 * @param input - string on which to search for the longest palindrome
 * @return string
 */
function longestPalindrome(input: string): string {
  if(isPalindromic(input)) {
    return input;
  }
  // TODO
  throw new Error("TODO");
}

/**
 * A string is palindromic if all the characters are mirrored upon a pivot point
 * in the string - either on a character if the string is of odd length, or on
 * the space between characters if the string is even length.
 * 
 * @param input - string 
 */
function isPalindromic(input: string): boolean {
  // TODO
  throw new Error("TODO");
}