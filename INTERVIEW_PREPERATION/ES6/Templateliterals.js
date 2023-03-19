// # `Template literals`

// Template literals are string literals that allow you to embed expressions and values within strings.

// Template literals are enclosed by the back-tick ( ``) or grave accent
// character instead of double or single quotes.

// **Example:**

let fName="ujjwal";
let LName="Singh";

let totalMoney=50;
let somemoney=100;

// let full_Name=`${fName} ${LName}, TotalMoney= ${totalMoney+somemoney}`

// console.log(full_Name)

// we can call the function inside the templeatelitreat and we can do mathmetical opretion 

function add(){
 return totalMoney+somemoney
}

 let full_Name=`${fName} ${LName}, TotalMoney= ${2*add()}`

console.log(full_Name)