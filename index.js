function isPalindrome(word) {
  const putInArray = word.split("");
  const reverseArray = putInArray.reverse();
  const reverseString = reverseArray.join("");
  if(word === reverseString){
    return true;
  }
  else{
    return false;
  }

  // Write your algorithm here
}
isPalindrome("abba");


/* 
  Add your pseudocode here
 1. first I write the string in an array
 2. I will reverse the array element
 3. I change the array into a string
 4. I check if the word is same as the reversed string

*/

/*
  Add written explanation of your solution here
  What to here is to take the string and convert it to an array then revese the array using the method Array.prototype.reverse() then change the array into a string using Array.prototype.join() method then compare it with the string given if they are the same it is a palindrome otherwise not palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
