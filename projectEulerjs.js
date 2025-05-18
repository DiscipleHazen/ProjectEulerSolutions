let currentProblem = 0;

function nextProblem() {
    if(currentProblem < problems.length - 1) {
    document.getElementById("problem-number").innerHTML = problems[currentProblem + 1].problem;
    document.getElementById("problem-title").innerHTML = problems[currentProblem + 1].title;
    document.getElementById("description-1").innerHTML = problems[currentProblem + 1].description1;
    document.getElementById("description-1.1").innerHTML = problems[currentProblem + 1].description11;
    document.getElementById("description-2").innerHTML = problems[currentProblem + 1].description2;
    document.getElementById("description-3").innerHTML = problems[currentProblem + 1].description3;
    document.getElementById("solution-1").innerHTML = problems[currentProblem + 1].solution1;
    if (!problems[currentProblem + 1].solution2) {
        document.getElementById("codeblock").style.display = "none"; // Hide if empty
        
    } else {
        document.getElementById("codeblock").style.display = "block"; // Show if there's content
        document.getElementById("solution-2").innerHTML = problems[currentProblem + 1].solution2
        
    }
    if (!problems[currentProblem + 1].solution3) {
        document.getElementById("codeblock-2").style.display = "none"; // Hide if empty
        
        
    } else {
        document.getElementById("codeblock-2").style.display = "block"; // Show if there's content
        document.getElementById("solution-3").innerHTML = problems[currentProblem + 1].solution3
        
    }
    currentProblem++;
    console.log(currentProblem);
    Prism.highlightAll();
    }
    
}
function lastProblem() {
    if(currentProblem - 1 >= 0) {
    document.getElementById("problem-number").innerHTML = problems[currentProblem - 1].problem;
    document.getElementById("problem-title").innerHTML = problems[currentProblem - 1].title;
    document.getElementById("description-1").innerHTML = problems[currentProblem - 1].description1;
    document.getElementById("description-1.1").innerHTML = problems[currentProblem - 1].description11;
    document.getElementById("description-2").innerHTML = problems[currentProblem - 1].description2;
    document.getElementById("description-3").innerHTML = problems[currentProblem - 1].description3;
    document.getElementById("solution-1").innerHTML = problems[currentProblem - 1].solution1;
    if (!problems[currentProblem - 1].solution2) {
        document.getElementById("codeblock").style.display = "none"; // Hide if empty
        
    } else {
        document.getElementById("codeblock").style.display = "block"; // Show if there's content
        document.getElementById("solution-2").innerHTML = problems[currentProblem - 1].solution2;
    }
    if (!problems[currentProblem - 1].solution3) {
        document.getElementById("codeblock-2").style.display = "none"; // Hide if empty
        
    } else {
        document.getElementById("codeblock-2").style.display = "block"; // Show if there's content
        document.getElementById("solution-3").innerHTML = problems[currentProblem - 1].solution3
        
    }
    currentProblem--;
    console.log(currentProblem);
    Prism.highlightAll();
    }
    
}

let problems = [
    {
        problem: "Problem 1",
        title: "Problem 1: Find the sum of all multiples of 3 or 5 below n",
        description1: "There are two approaches an O(n) (Linear Time Complexity, time grows with input size, doubling the input size roughly doubles execution time) and an O(1) (Constant time complexity, input size doesn't matter) matter)",
        description11: "Linear Time Complexity, iterates through all numbers",
        solution1: `function multiplesOf3Or5() {
            let sum = 0;
            for (let i = 0; i < 1000; i++) {
                if (i % 3 === 0 || i % 5 === 0) {
                    sum += i;
                }
            }
            return sum;
        }
            console.log(multiplesOf3Or5()); // Outputs 233168`,
        description2: "Constant Time Complexity, directly calculates with a formula this function finds the sum of the multiples below a number", 
        solution2: `function sumDivisibleBy(multiple, n) {
        let p = Math.floor((n - 1) / multiple);
        return multiple * (p * (p + 1)) / 2;
    }
    console.log(sumDivisibleBy(3, 1000)); // Outputs 166833`,
        description3: `This function adds up the sum of each multiple and then
subtracts common multiples, to prevent double counting, since
we are adding up the multiples, we dont want to add up 
numbers that repeat twice`,
        solution3: `function efficientSumMultiples(n) {
    return sumDivisibleBy(3, n) + sumDivisibleBy(5, n) 
    sumDivisibleBy(15, n);
}
    console.log(efficientSumMultiples(1000)); // Outputs 233168`,
    },
    {
        problem: "Problem 2",
        title: "Problem 2: Find the sum of even Fibonacci numbers below n",
        description1: "By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.",
        description11: "Logarithmic Time Complexity O(log n) (Numbers of iterations needed is significantly less than n, since Fibonacci numbers grow at a rate of 1.618 times, logarithmic functions grow very slowly, even if you multiply input, the output only increases slightly)",
        solution1: `function sumEvenFibonacci() {
            let sum = 0;
            let a = 0;
            let b = 1;
            while (b < n) {
                if (b % 2 === 0) {
                    sum += b;
                }
                let temp = a;
                a = b;
                b = temp + b;
            }
            return sum;
        }
            console.log(sumEvenFibonacci(4000000)); // Outputs 4613732`,
        description2: ' ',
        solution2: null,
        description3: ' ',
        solution3: null
    },
    {
        problem: "Problem 3",
        title: "Problem 3: What is the largest prime factor of the given number?",
        description1: `We first repeatedly divide out the smallest prime factors 
starting with 2 (while, if n %  === 0). Then increment the factor and continue to divide it out.
Once the number becomes 1, we have are our largest prime
factor. Pretty straitforward.`,
        description11: `O(sqrt(n)) (Square root time complexity, the number of iterations needed is less than n, since we only need to check up to the square root of n) `,
        solution1: `function largestPrimeFactor(n) {
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
    console.log(largestPrimeFactor(13195)); // Outputs 29`,
        description2: ' ',
        solution2: null,
        description3: ' ',
        solution3: null
    },
    {
        problem: "Problem 4",
        title: "Problem 4: Find the largest palindrome made from the product of two n-digit numbers",
        description1: `Raise 10 to n power - 1 to get the smallest number we can
multiply by, and raise 10 to the n power to get the largest
nuber we multiply by.
Take the largest number and multiply it.
with the largest number incremating downwards.
If the product is less than the palindrome found then
increment down and continue to multiply, setting the number
we multiply against to the number we increment down to as
to not repeat unneeded multiplications.
Will crash past 6 as n.`,
        description11: `O(n^2) (Quadratic time complexity, the number of iterations needed is proportional to n^2, since we are iterating through all pairs of 3-digit numbers)`,
        solution1: `function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
    console.log(isPalindrome(12321)); // Outputs true
    console.log(isPalindrome(12345)); // Outputs false
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
console.log(largestPalindromeProduct(3)) // Outputs 906609 (913 * 993)`,
        description2: ' ',
        solution2: null,
        description3: ' ',
        solution3: null
    },
    {
        problem: "Problem 5",
        title: "Problem 5: Find the smallest positive number that is evenly divisible by all numbers from 1 to n",
        description1: `Greatest Common Divisor (GCD) / Highest Common Factor(HCF).
Largest positive integer that divides two or more integers
without leaving a remainder/ Smallest number that can divide
both numbers evenly.
This Method involves repeadtedly replacing the larger number
by the remainder of the division of the two numbers until
one of numbers becomes zero. The non-zero number at this stage
is the GCD.
So basically, replace the divisor by the remainder of the
two numbers and replace the dividend by the divisor before it.
Can input numbers in any arrangement.`,
        description11: ' ',
        solution1: `function GCD(NUMBER_1, NUMBER_2){
    return NUMBER_2 === 0 ? NUMBER_1 : GCD(NUMBER_2, NUMBER_1 % NUMBER_2);

}
    console.log(GCD(48, 18)); // Outputs 6`,
        description2: `Least Common Multiple (LCM) Least Common Multiple (LCM)
Smallest positive integer that is evenly divisible by all.
the given numbers.
Multiply the two numbers and divide them by the GCD. This function finds the LCM of the two number`,
        solution2: `function LCM(NUMBER_1, NUMBER_2){
    return (NUMBER_1 * NUMBER_2) / GCD(NUMBER_1, NUMBER_2);
    }
    console.log(LCM(48, 18)); // Outputs 144`,
        description3: `A computationally efficent method - instead of iterating 
by one number at a time and checking if it is divisble 
by integer.
Each time we iterate through the loop we ensure that our
number remains dvisible by all the numbers before it (stacking).
Essentially we the LCM becomes a integer divisible by the
other integers before it.`,
        solution3: `function smallestMult(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    console.log(result, i, "before");
    result = LCM(result, i);
    console.log(result, "LCM");
  }
  return result;
}
console.log(smallestMult(5)); // Outputs 60
console.log(smallestMult(10)); // Outputs 2520`

    },
    
]