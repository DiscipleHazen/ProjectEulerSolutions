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
        
    }
    if (!problems[currentProblem + 1].solution3) {
        document.getElementById("codeblock-2").style.display = "none"; // Hide if empty
        
    } else {
        document.getElementById("codeblock-2").style.display = "block"; // Show if there's content
        
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
        solution1: `function() {
            let sum = 0;
            for (let i = 0; i < 1000; i++) {
                if (i % 3 === 0 || i % 5 === 0) {
                    sum += i;
                }
            }
            return sum;
        }`,
        description2: "Constant Time Complexity, directly calculates with a formula this function finds the sum of the multiples below a number", 
        solution2: `function sumDivisibleBy(multiple, n) {
        let p = Math.floor((n - 1) / multiple);
        return multiple * (p * (p + 1)) / 2;`,
        description3: `This function adds up the sum of each multiple and then
subtracts common multiples, to prevent double counting, since
we are adding up the multiples, we dont want to add up 
numbers that repeat twice`,
        solution3: `function efficientSumMultiples(n) {
    return sumDivisibleBy(3, n) + sumDivisibleBy(5, n) 
    - sumDivisibleBy(15, n);
}`
    },
    {
        problem: "Problem 2",
        title: "Problem 2: Find the sum of even Fibonacci numbers below n",
        description1: "By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.",
        description11: "Logarithmic Time Complexity O(log n) (Numbers of iterations needed is significantly less than n, since Fibonacci numbers grow at a rate of 1.618 times, logarithmic functions grow very slowly, even if you multiply input, the output only increases slightly)",
        solution1: `function() {
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
        }`,
        description2: ' ',
        solution2: null,
        description3: ' ',
        solution3: null
    },
]