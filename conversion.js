let score = 33abc

console.log(typeof(score));
console.log(typeof(String(score)));// conversion to string

let score1 = "33.44"
console.log(typeof(score1));
console.log(typeof(Number(score1)));// conversion to number

let score2 = "Akshi"
console.log(typeof(score2));
console.log(typeof(Number(score2)));// conversion to number results in NaN

let isLoggedIn = "true"

console.log(typeof(isLoggedIn));
console.log(typeof(Boolean(isLoggedIn)));// conversion to boolean

let isLoggedIn1 = 1

console.log(typeof(isLoggedIn1));
console.log(typeof(Boolean(isLoggedIn1)));// conversion to boolean

//"33"=> 33
//"33.44"=>33.44
//"Akshi"=> NaN
 let isloggedIn = Booleam(isloggedin)
 console.log(isloggedIn);// conversion to booleanan(isloggedin)
//""=> false
//" "=> true
//"Akshi"=> true
//0=> false
//1/-1/2/3..=> true

let someNumber = 33
console.log(someNumber.toString());// another method to convert number to string
console.log(String(someNumber));// another method to convert number to string

console.log(+"44");// another method to convert string to number
console.log(+"33.44");// another method to convert string to number
