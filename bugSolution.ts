function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

let result1 = add(1, 2); 
let result2:number;

let num1 = 1;
let num2 = "2";

if (isNumber(num1) && isNumber(parseInt(num2))) {
  result2 = add(num1, parseInt(num2));
} else {
  console.error("Invalid input: Both parameters must be numbers.");
}
console.log(result1); //Output:3
console.log(result2); //Output:3