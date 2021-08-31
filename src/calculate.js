import process from 'process';

function sum (numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}
function avg(numbers) {
  return numbers.reduce((a, b) => (a + b)) / numbers.length;
}

// process arguments
const usageDescription =
`Usage: node calculate.js operator operand1 operand2 operand3 ... 
operator: Must be either 'sum' or 'avg'.
operands: Must be numbers (at least two) seperated by spaces.
Examples:
1) node calculate.js sum 1 2 3
2) node avg 0 100
`;

const [nodePath, scriptPath, ...args] = process.argv;
const [operator, ...operands] = args;

try {
  if (!(operator === "sum" || operator === "avg")) throw new Error('Error: Wrong operator argument!');
  if (operands.length < 2) throw new Error('Error: Wrong number of arguments!');
  operands.forEach((operand, index) => {
    const n = parseFloat(operand);
    if (isNaN(n)) throw new Error('Error: Only numbers are allowed as operands!');
    operands[index] = n;
  });

} catch(error) {
  console.log(error.message);
  console.log(usageDescription);
  process.exit(1);
}

switch (operator) {
  case "sum": console.log(sum(operands)); break;
  case "avg": console.log(avg(operands)); break;
}