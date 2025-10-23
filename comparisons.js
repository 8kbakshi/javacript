console.log(2 > 1);// greater than
console.log(2 < 1);// less than

console.log("2">1);
console.log("02">1);// string comparison based on unicode values
console.log(null>=0);// null is considered as 0 in numeric comparison
console.log(undefined<=0);// undefined is considered as NaN in numeric comparison

// ===
console.log(2 === 2);// true
console.log(2 === '2');// false