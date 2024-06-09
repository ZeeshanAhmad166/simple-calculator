#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["add", "subtract", "multiply", "divide"],
    },
]);
// conditional statement
if (answer.operator === "add") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtract") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "divide") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("select a valid operator");
}
