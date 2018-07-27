// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


function findPrimeFactors (number) {

  let primeFactors = [];
  while(number % 2 == 0) {
    primeFactors.push(2);
    number = number / 2;
  }

  for(let i = 3; i <= Math.sqrt(number); i++) {

    while(number % i == 0) {
      primeFactors.push(i);
      number = number / i;
    }
  }

  if(number > 2) {
    primeFactors.push(number);
  }

  let grestestNumber = primeFactors.reduce((next, acc) => {
    if(next > acc) {
      return next;
    } else return acc;
  })

  return grestestNumber;
}

console.log(findPrimeFactors(600851475143));
