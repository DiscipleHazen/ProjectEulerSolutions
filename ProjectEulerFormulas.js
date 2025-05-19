/*Greatest Common Divisor (GCD) / Highest Common Factor(HCF)
-Largest positive integer that divides two or more integers
without leaving a remainder/ Smallest number that can divide
both numbers evenly.
-This Method involves repeadtedly replacing the larger number
by the remainder of the division of the two numbers until
one of numbers becomes zero. The non-zero number at this stage
is the GCD
-So basically, replace the divisor by the remainder of the
two numbers and replace the dividend by the divisor before it
Can input numbers any arrangement
*/
function GCD(NUMBER_1, NUMBER_2){
    return NUMBER_2 === 0 ? NUMBER_1 : GCD(NUMBER_2, NUMBER_1 % NUMBER_2);

}
console.log(GCD(48, 18));

/*Least Common Multiple (LCM)
-Smallest positive integer that is evenly divisible by all
the given numbers
-Multiply the two numbers and divide them by the GCD
*/
function LCM(NUMBER_1, NUMBER_2){
    return (NUMBER_1 * NUMBER_2) / GCD(NUMBER_1, NUMBER_2);
}
console.log(LCM(48, 18));

/*-Sum of the first n natural numbers is n(n + 1)/2, 
then square*/
function squareOfSum(n){
    return Math.pow(n*(n+1)/2, 2);
}

/*-Sum of squares of the first n natural numbers is 
n(n + 1)(2n + 1)/6 */
function sumOfSquares(n){
    return n*(n+1)*(2*n+1)/6;
}

/*-Sieve of Eratosthenes Algorithm prime number theorem 
formula This algorithm is used to find all prime numbers 
up to a certain limit, the limit is found by
n * log(n) + n * log(log(n))
-This formula almost always works, and works better
with big numbers.*/

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



