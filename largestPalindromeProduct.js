// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

let palindromeArray = [];

function palindrome(number) {

  let reNumber = number.toString().split('').reverse().join().replace(RegExp(',','g'), '');

  (number == reNumber) ? palindromeArray.push(number) : '';
}

for(let i = 100; i < 1000; i++) {
  for(let j = 100; j< 1000; j++) {
    product = i * j;
    palindrome(product);
  }
}

let leargestPalindrome = palindromeArray.reduce((next, acc) => {
  if(next > acc) {
    return next;
  } else return acc;
})

console.log(leargestPalindrome)
