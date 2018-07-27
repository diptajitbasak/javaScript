// Using the JavaScript language, have the function KaprekarsConstant(num) take 
// the num parameter being passed which will be a 4-digit number with at least two 
// distinct digits. Your program should perform the following routine on the
//  number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number),
//  and subtract the smaller number from the bigger number. Then repeat the previous step.
//  Performing this routine will always cause you to reach a fixed number: 6174.
//  Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174).
//  Your program should return the number of times this routine must be performed until 6174 is reached.
//  For example: if num is 3524 your program should return 3 because of the following steps: 
//  (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 


function KaprekarsConstant(num) {
  let count = 0;
  while(num != 6174) {

  let arrayStr = num.toString().split('');
  let arraySize = arrayStr.length - 1;
  
  // Assending Order
  for(let i = 0; i < arraySize; i++) {

    for(let j = 0; j < arraySize - i; j++) {

      if(arrayStr[j] > arrayStr[j+1]) {

        let temp = arrayStr[j];
        arrayStr[j] = arrayStr[j+1];
        arrayStr[j+1] = temp;
      }
    }
  }
  let assendingArray = arrayStr.join().replace(RegExp(',','g'), '');

  // Decending Order
  for(let i = 0; i < arraySize; i++) {

    for(let j = 0; j < arraySize - i; j++) {

      if(arrayStr[j] < arrayStr[j+1]) {

        let temp = arrayStr[j];
        arrayStr[j] = arrayStr[j+1];
        arrayStr[j+1] = temp;
      }
    }
  }
  let descendingArray = arrayStr.join().replace(RegExp(',','g'), '');

  // Subtract
  let subtractvalue = descendingArray - assendingArray;
  
  num = subtractvalue;

  count++;
  if(count > 999) 
  return 5;
  }

  return count;
}
   
// keep this function call here 
console.log(KaprekarsConstant(2111));


