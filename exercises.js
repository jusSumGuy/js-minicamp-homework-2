/*
FOR loops 

	- For loop is like a circle. Think of a for loop as a clock. Everytime 12 hours go by 1 loop has been completed. 
	Or everytime 60 minutes go by one loop is completed. Only difference is that with for loops you can decide 
	when each loop gets completed. And just like how you decide what you're going to do from hour to hour, you 
	can also make a for loop do multiple actions, one action or no actions at all on each loop.
	
`&&`, `||`, `!`

	- && means 'And'  - || means 'Or'  - ! means the opposite of something.
	IF you wake up one morning and pretend to be sick so you don't have to go to school. You would probably need to
	convince both your parents. So IF(mom && dad are convinced) then you can stay home. But if you only had to convince
	one of your parents then it would be IF(mom is convinced |(or)| dad is convinced) then you can stay home. But you know 
	the truth. If ImSick was a true or false value then ImSick would = to false. Meanwhile you're parents think you are
	sick so its like you put a (!ImSick) in a IF statement. Since you're not really sick, ImSick is false but when you put
	the '!' symbol before the false boolean value it becomes true. If you put a '!' before a true value then it would be false.

ARRAYS

	- An array is a list, a list of numbers, strings, characters, objects and functions. Usually to be organized you should 
	try to put the same type of things aka data types in an array. But if you want, you can put any combination of data types
	even other arrays. The best part about arrays is that they have built in functions that let you organize and go over the array 
	any way you'd like.



Git

	- Git helps many people work on the same projects without getting in each others way. It helps with coordinating a large team of 
	people so no work is lost or damaged. It's used for version control, to see who added what changes to what parts of the code.
		

GitHub

	- Is a website that helps programmers collaborate with each other while working on the same project. It's a good place to download 
	needed files for work or learning. You can also upload your own code to the site, so it's a good tool for learning, teaching 
	and building an online code resume.

*/


// Do not change any of the function names

function getBiggest(x, y) {
  if(x >= y)
    return x;
  return y;
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}

function greeting(language) {
  if(language === 'German')
    return 'Guten Tag!';
  else if(language === 'English')
    return 'Hello!';
  else if(language === 'Spanish')
    return 'Hola!';
  else
    return 'Hello!';
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  if(num === 10 || num === 5)
    return true;
  return false;
  // return true if num is 10 or 5
  // otherwise return false
}

function isInRange(num) {
  if(num < 50 && num > 20)
    return true;
  return false;
  // return true if num is less than 50 and greater than 20
}

function isInteger(num) {
  if(num === Math.round(num))
    return true;
  return false;
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  if(num % 3 === 0 && num % 5 === 0)
    return 'fizzbuzz';
  else if (num % 3 === 0)
    return 'fizz';
  else if(num % 5 === 0)
    return 'buzz';
  else 
    return num;
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

function isPrime(num) {
  if(num <= 2)
    return false;
  for(var i = 2; i < num ;i++){
    if(num % i === 0)
      return false;
  }
  return true;

  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
}

function returnFirst(arr) {
  return arr[0];
  // return the first item from the array
}

function returnLast(arr) {
  return arr[arr.length - 1];
  // return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;
  // return the length of the array
}

function incrementByOne(arr) {
  for(var i = 0; i < arr.length; i++){
    arr[i]++;
  }
  return arr;
  // arr is an array of integers  
  // increase each integer by one
  // return the array
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
  // add the item to the end of the array
  // return the array
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
  var singWord = '';
  for(var i = 0; i < words.length; i++){
    if(i !== words.length - 1)
    singWord += words[i] + ' ';
    else
      singWord += words[i];
  }
  //singWord -= ' ';
  return singWord;
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === item)
      return true;
  }
  return false;
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {
  var total = 0;
  for(var i = 0; i < numbers.length; i++)
    total += numbers[i];
  return total;
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  var average = 0;
  for(var i = 0; i < testScores.length; i++)
    average += testScores[i];
  return average / testScores.length;
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
  var largest = 0;
  for(var i = 0 ; i < numbers.length; i++){
    if(numbers[i] > largest)
      largest = numbers[i];

  // numbers is an array of integers
  // return the largest integer
  }
  return largest;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
