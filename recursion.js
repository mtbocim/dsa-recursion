/** product: calculate the product of an array of numbers. */

function product(nums) {
   // let product = 1;
   // for(num of nums){
   //    product *= num;
   // }
   // return product
   if (nums.length === 0) return 1;
   return nums[0] * product(nums.slice(1));

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
   // let longestW = 0;
   // for(let word of words){
   //    if (word.length > longestW){
   //       longestW= word.length
   //    }
   // }
   // return longestW;
   if (words.length === 0) return 0;
   return words[0].length > longest(words.slice(1))
      ? words[0].length
      : longest(words.slice(1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
   // let everyOtherLetter = '';
   // for(let i = 0; i < str.length; i+=2){
   //    everyOtherLetter += str[i];
   // }
   // return everyOtherLetter;
   if (str.length === 0) return '';
   if (str.length === 1) return str[0];
   return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
   if (arr.length === 0) return false;
   return arr[0] === val ? true : find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
   if (str.length === 0) return true;
   if (str.length === 1) return true;
   if (str.length > 1) {
      if (str[0] !== str[str.length - 1]) return false;
      return isPalindrome(str.slice(1, -1));
   }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

   if (str.length === 0) return '';
   return str.slice(-1) + revString(str.slice(0, -1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). 
 * FIRST TIME IT APPEARS!!!!!!asdfhjasdflk;
*/

function findIndex(arr, val) {
   // for(let i = 0; i< arr.length; i++){
   //    if (arr[i]===val){
   //       return i;
   //    }
   // }
   // return -1;
   //console.log("what is arr?", arr)
   if (arr.length === 0) return -1;
   if (arr[0]=== val) return 0;
   //return arr[arr.length - 1] === val ? arr.length - 1 : findIndex(arr.slice(0, -1), val);
   return findIndex(arr.slice(1), val) !== -1? 1+findIndex(arr.slice(1), val):-1;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
   product,
   longest,
   everyOther,
   find,
   isPalindrome,
   findIndex,
   revString,
   gatherStrings,
   binarySearch,
   binarySearchIndex,
};
