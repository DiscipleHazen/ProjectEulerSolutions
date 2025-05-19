/*Greatest Common Divisor (GCD) / Highest Common Factor(HCF)
-Largest positive integer that divides two or more integers
without leaving a remainder/ Smallest number that can divide
both numbers evenly.
-This Method involves repeadtedly replacing the larger number
by the remainder of the division of the two numbers until
one of numbers becomes zero. The non-zero number at this stage
is the GCD.
-So basically, replace the divisor by the remainder of the
two numbers and replace the dividend by the divisor before it
Can input numbers any arrangement.
*/
function GCD(NUMBER_1, NUMBER_2){
    return NUMBER_2 === 0 ? NUMBER_1 : GCD(NUMBER_2, NUMBER_1 % NUMBER_2);

}
console.log(GCD(48, 18)); // Outputs 6

/*Least Common Multiple (LCM)
-Smallest positive integer that is evenly divisible by all
the given numbers
-Multiply the two numbers and divide them by the GCD
*/
function LCM(NUMBER_1, NUMBER_2){
    return (NUMBER_1 * NUMBER_2) / GCD(NUMBER_1, NUMBER_2);
}
console.log(LCM(48, 18)); // Outputs 144

/* Problem 5 Find the smallest positive number that is 
evenly divisible from 1 to n (The LCM of the numbers)
-Example - 2520 is the smallest number that can be divided
by each of the numbers from 1 to 10 without any remainder
-A computationally efficent method - instead of iterating 
by one number at a time and checking if it is divisble 
by integer
-Each time we iterate through the loop we ensure that our
number remains dvisible by all the numbers before it. (stacking)
-Essentially we the LCM becomes a integer divisible by the
other integers before it*/
function smallestMult(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    console.log(result, i, "before");
    result = LCM(result, i);
    console.log(result, "LCM");
  }
  return result;
}
console.log(smallestMult(5)); // Outputs 60
console.log(smallestMult(10)); // Outputs 2520

/*Problem 1 Find the sum of all numbers -below- n that are 
multiples of 3 or 5
-There are two approaches an O(n) (Linear Time Complexity,
time grows with input size, doubling the input size roughly
doubles execution time) and an O(1) (Constant time 
complexity, input size doesn't matter)
matter)
*/
// Linear Time O(n)
function multiplesOf3Or5(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
// Constant Time O(1), directly calculates with a formula
// This function finds the sum of one multiple
function sumDivisibleBy(multiple, n) {
    let p = Math.floor((n - 1) / multiple);
    return multiple * (p * (p + 1)) / 2;
}
/* This function adds up the sum of each multiple and then
subtracts common multiples, to prevent double counting, since
we are adding up the multiples, we dont want to add up 
numbers that repeat twice*/
function efficientSumMultiples(n) {
    return sumDivisibleBy(3, n) + sumDivisibleBy(5, n) - sumDivisibleBy(15, n);
}

console.log(efficientSumMultiples(1000));

/* Problem 2 By considering the terms in the Fibonacci 
sequence whose values do not exceed n, find the sum of the 
even-valued terms.*/
/* Logarithmic Time Complexity O(log n) (Numbers of iterations
needed is significantly less than n, since Fibonacci numbers
grow at a rate of 1.618 times, logarithmic functions grow
very slowly, even if you multiply input, the output only
increases slightly)*/
function sumEvenFibonacci(n) {
    let a = 1, b = 2, sum = 0;
    
    while (b <= n) {
        if (b % 2 === 0) {
            sum += b;
        }
        let next = a + b;
        a = b;
        b = next;
    }

    return sum;
}

/*Problem 3 What is the largest prime factor of the given
number?
-We first repeatedly divide out the smallest prime factors 
starting with 2 (while, if n %  === 0)
-Then increment the factor and continue to divide it out
-Once the number becomes 1, we have are our largest prime
factor
-Pretty straitforward*/

function largestPrimeFactor(n) {
    let factor = 2;
    while (n > 1) {
        if (n % factor === 0) {
            n /= factor;
        } else {
            factor++;
        }
    }
    return factor;
}

/*Problem 4 Find the largest palindrome made from the 
product of two n-digit numbers.
-Raise 10 to n power - 1 to get the smallest number we can
multiply by, and raise 10 to the n power to get the largest
nuber we multiply by.
-Take the largest number and multiply it.
with the largest number incremating downwards.
-If the product is less than the palindrome found then
increment down and continue to multiply, setting the number
we multiply against to the number we increment down to as
to not repeat unneeded multiplications.
-Will crash past 6 as n.*/

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}
function largestPalindromeProduct(n) {
    let palindrome = 0;
    let smallest_possible = Math.pow(10, n - 1);
    let largest_possible = Math.pow(10, n);

    for (let i = largest_possible - 1; i >= smallest_possible; i--) {
        for (let j = i; j >= smallest_possible; j--) { // Start j from i to avoid duplicate calculations
            let product = i * j;
            if (product <= palindrome) break; // Stop checking smaller products once palindrome is exceeded
            if (isPalindrome(product)) {
                palindrome = product;
            }
        }
    }
    return palindrome;
}
console.log(largestPalindromeProduct(3)) // Outputs 906609 (913 * 993)

/*Problem 6 Find the  difference between the sum of squares
of the first n natural numbers and square the sum
-Sum of the first n natural numbers is n(n + 1)/2, then square
-Sum of squares of the first n natural numbers is 
n(n + 1)(2n + 1)/6
-The first solution us*/
function sumsquareDifference(n) {
    let squareOfSum = Math.pow(n*(n+1)/2, 2)
    let sumOfSquares = n*(n+1)*(2*n+1)/6;
    return squareOfSum - sumOfSquares;
}
console.log(sumsquareDifference(10));

/*Problem 7 Find the nth prime number
-Using the Sieve of Eratosthenes Algorithm, In the Sieve 
of Eratosthenes, we mark multiples of primes as non-prime,
we only check numbers up to the square root of the limit,
hence i * i <= limit. This is because any composite
number must have at least one factor less than or equal to
the square root of the number. So if the square of i is
greater than the limit, then that number is larger than
the square root of the limit and we can stop checking.
-The limit is the uppper bound of the prime numbers we
are looking for. So the prime will almost always be smaller
than the limit, the formula works better for big numbers.
-This algorithm is used to find all prime numbers up to a
certain limit, the limit is found by the prime number 
theorem formula n * log(n) + n * log(log(n))
-This is a very efficient algorithm for finding primes

-First create an array of fixed size and fill it with
booleans of true
-Set the first 2 numbers to false, since 0 and 1 are not prime
-Mark non-prime numbers by eliminating multiples of known
primes, like 2 and 3. Starts at 2, checks if it is less
than the square of the limit and then finds all the
multiples, less than the square root of the limit and marks
them false, then as it goes through the outerloop all the 
non prime have already been marked skipping unnecessary 
calculations
-Returns a new array of primes with the .map method,
which transforms each element in the array, and returns
a new array after the transformations.
-.map goes through each element, returning the index, which
is the prime number, for true and null for false, then 
.filter gets rid of all null values, by returning only the
follows that are "truthy", exluding null
-.filter returns an element if the callback function
returns a truthy  value, so eg function(x){return x > 5}

-The second function simply calculates the upper limit with
the formula, generates a list of primes with the sieve 
function, and then returns the nth number - 1 in the 
array, since it is zero-indexed*/


function sieve(limit) {
    let factors = new Array(limit).fill(true);
    factors[0] = factors[1] = false; // 0 and 1 are not prime numbers

    for (let i = 2; i * i <= limit; i++) {
        if (factors[i]) {
            for (let j = i * i; j <= limit; j += i) {
                factors[j] = false; //Marks multiples of i as non-prime
            }
        }
    }

    return factors.map((isPrime, index) => 
        isPrime ? index : null).filter(x => x);;
}

function nthPrime(n) {
    let limit = Math.ceil(n * Math.log(n) + n * Math.log(Math.log(n))); // Estimate upper bound
    let primeList = sieve(limit); // Generate prime numbers up to "limit"
    return primeList[n - 1]; // nth prime (zero-based index)
}

console.log(nthPrime(10001)); // Outputs 104743

/*Problem 8 Find the greatest product of nth adjacent digits
in the 1000-digit number that have the greatest product.
-First converts the number string into an array with
map(Number) (which is shorthand for x => Number(x),
Number is a built-in function that converts values into
numbers. ParseInt and ParseFloat stop at the first
non-number in a string, Number will return Nan.
-Loop through the array, stop at .length - n, preventing
slicing beyond the array bounds.
-Takes a slice of the array, and .reduce applies the 
function (accumulated * current element).
-The .reduce works like 
array.reduce(callback(accumulator, currentValue), initialValue)
-Math.max chooses the largest number
-Returns the largest product*/
function largestProductinaSeries(n) {
    const numStr = `
7,3,1,6,7,1,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4
9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,3,2,6,2,3,9,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3
`.replace(/\s/g, ""); // Remove spaces/newlines

    let numArr = numStr.split(",").map(Number); // Convert string into an array of numbers
    let maxProduct = 0;

    for (let i = 0; i <= numArr.length - n; i++) {
        let product = numArr.slice(i, i + n).reduce((acc, digit) => acc * digit, 1);
        maxProduct = Math.max(maxProduct, product);
    }

    return maxProduct;
}

console.log(largestProduct(13)); // Change 13 to any 'n' value you need

