const readline = require("readline");

const lineDetail =readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*lineDetail.question(`please provide your name -`,(name)=>{
    console.log(`HI ${name}!`);
    lineDetail.close();
});*/

/*const args = process.argv ;
const num1 = parseInt(args[2]);
const num2 = parseInt(args[3]);
console.log(`The sum is: ${num1+num2}`);
console.log('args[0]:', args[0]);
console.log('args[1]:', args[1]);
console.log('args[2]:', args[2]);
console.log('args[3]:', args[3]);*/

/*const args = process.argv;
const op   = args[2];
const num1 = parseInt(args[3]);
const num2 = parseInt(args[4]);

if(op ==='add'){
    console.log(`The result is:${num1+num2}`);
}else if(op ==='sub'){
    console.log(`The result is:${num1-num2}`);
}else if(op ==='div'){
    console.log(`The result is:${num1/num2}`);
}else if(op ==='mul'){
    console.log(`The result is:${num1*num2}`);
}else{
    console.log("Unknown op");
}*/

const minimist = require('minimist');
//const args = minimist(process.argv.slice(2), {default: {num1:1}});
const args = minimist(process.argv.slice(2), {
  alias: {
    num1: 'n1',
    num2: 'n2'
  }
});

// Now we can access our arguments by name
const num1 = parseInt(args.num1);
const num2 = parseInt(args.num2);
const operation = args.operation;

if (operation === 'add') {
  console.log(`The result is: ${num1 + num2}`);
} else if (operation === 'subtract') {
  console.log(`The result is: ${num1 - num2}`);
} else if (operation === 'multiply') {
  console.log(`The result is: ${num1 * num2}`);
} else {
  console.log('Unknown operation');
}
console.log(args.operation); // 'add'
console.log(args.num1); // 5
console.log(args.num2); // 10



