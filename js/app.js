// Verbal Questions
// a: A parameter is is the argument that a function will take when called.

// b: Return is the actual output of a block of code, console.log is something that is just being printed to the console.

// c: Scope comes in two varieties: local and global. If we think about it in terms of a box containing scope, global scope is available both inside and out side of the box. Local scope is only available inside of the box.

// Palindrome
function checkPalindrome (palindrome) {
	// convert palindrom to lowercase and turn to an array of characters
	smallCasePal = palindrome.toLowerCase().split("").join("");
	// create another array that is the reverse of the first
	var reversePalindrome = palindrome.split("").reverse().join("").toLowerCase();
	// compare the arrays, if they match, return true, if not return false
	if (smallCasePal === reversePalindrome) {
		return true;
	}; 
	return false;
}

// Digit Sum
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// reducer is taking 2 numbers in the array, adding them to each other and then adding to current value, and so on; this is similar to how a for loop works. NEED THIS FUNCTION TO USE .reduce().

function sumDigits(number) {
	// turn the number into an array of WHOLE integers
	// How: make a string, split the string, use . map to make numbers (from library)
	let numArray = number.toString(10).split("").map(Number);
	// 10 = radix number (so 0-9)
	return numArray.reduce(reducer);
}

// Pythagoras
function calculateSide(sideA, sideB) {
	// sideA squared + sideB squared = sideC squared
	let sideCSquare = (Math.pow(sideA, 2) + Math.pow(sideB, 2));
	// return square root of squareC
	let sideC = Math.sqrt(sideCSquare);
	return sideC;
}

// Sum Array
let thisArray = [9, 3, 2, 6, 8]
let thatArray = [2, 4, 6, 8, 1]
function sumArray(numArray) {
	// make an empty var to catch the total
	var sum = 0
	// iterate through a number array
	for (i = 0; i < numArray.length; i++) {
	// add next number in array to previous number and add to sum
	sum += numArray[i]
	// ...so this is doing what .reduce was doing with less work...
	};
	// return the sum of the array
	return sum;
}

// Prime Numbers
// Step One
function checkPrime(num) {
	// divide num by all numbers up to num -1
	for (i = 2; i < num - 1; i++) {
		// if num is divisible by ANY but 1 and itself return false
		if (num % i == 0) {
		return false
		} 
	} 
	return true 
}

// Step Two
function printPrimes(limit){
    // loop through all numbers up to limit
    // start at 2, since 1 is not prime
    for(var i = 2; i <= limit; i++ ) { 
    // call checkPrime to see if each iteration is prime
      if(checkPrime(i)===true) {
          // Print prime numbers
          console.log(i)
        }
    }
}  

// Insert Dash
function insertDash(num) {
	// turn a number into a string array 
	let numberArray = num.toString().split("").map(Number);
	// log to check;
	// create an array of odd numbers for scientific comparison
	let oddNumbers = [1, 3, 5, 7, 9];
	// log to check
	// create a string to hold numbers once checked
	let dashString = " ";
	// iterate through the array
	for (i = 0; i < numberArray.length; i++) {
		// is it an odd number? IS IT? It is if you divide by 2 and there's something left
		if (numberArray[i] % 2 === 0) {
			// add it to da stringggg
			dashString += numberArray[i];
		// note to self: check oddNumbers INCLUDES i, can't do against numberarray[i] bc it's just one number
		} else if (oddNumbers.includes(numberArray[i])){
			dashString += numberArray[i];
			// if the next number is also odd, add it with a dassshhhhh
			if(oddNumbers.includes(numberArray[i+1]))
			dashString += "-" ;
		} else {	
		// make sure everyone is joining the dashString partay
			dashString += numberArray[i];
		}
	}
	return dashString
}
	


























