// console.log("One")
// setTimeout(()=>{
//     console.log("Two")
// },0)
// console.log("Three")

// Q.2

// console.log(0.2+0.3===0.5)

// Q.3

// console.log(1<2<3)
// console.log(3>2>1)

// Explanation

// The output of the first console.log statement would be true.

// This is because 1 < 2 evaluates to true, and then true < 3 also evaluates to true.
//  The reason for this is that the comparison operator < is left-associative, meaning
//   that it first evaluates 1 < 2, which is true, and then it evaluates true < 3. In 
//   JavaScript, true is coerced into the number 1 in a comparison with a number, so the 
//   expression becomes 1 < 3, which is true.

// The output of the second console.log statement would be false.

// This is because 3 > 2 evaluates to true, but then true > 1 evaluates to 
// false. This is because, as mentioned before, the < and > comparison operators
//  are left-associative, and true is coerced into 1. So, 3 > 2 evaluates to true,
//   and then true > 1 becomes 1 > 1, which is false.


