process.on("message", ({ num1, num2, operation }) => {
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
            break;
        default:
            result = "Error: Invalid operation";
    }
    process.send(result);
});