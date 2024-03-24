import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform opration",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Multiplication") {
    console.log("your value is " + answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Addition")
    console.log("your value is " + answer.firstNumber + answer.secondNumber);
else if (answer.operator === "subtraction")
    console.log("your value is ", answer.firstNumber - answer.secondNumber);
else if (answer.operator === "Division")
    console.log("your value is " + answer.firstNumber / answer.secondNumber);
else {
    console.log("please Select your valid opertor");
}
