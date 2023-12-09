// 1st Example: Checking student gender with a regular "if" statement


let studentGender: any = "female";
if (studentGender === "male") {
    console.log("Entry on the left side");
} else {
    console.log("Entry on the right side");
}

// 2nd Example: Checking student grade with a regular "if" statement


let studentGrade: any = 90;
if (studentGrade === 90) {
    console.log("You got an A grade");
} else {
    console.log("You got a grade other than A");
}

// 3rd Example: Checking salary against monthly expense with a regular "if" statement


let salary = 50000;
let monthlyExpense = 80000;
if (salary === 40000) {
    console.log("You do not have enough money");
} else {
    console.log("You have enough money");
}

// 4th Example: Simple comparison with a regular "if" statement


if (2 > 3) {
    console.log("2 is greater than 3");
}

// 5th Example: Decision-making based on boolean variables with a regular "if" statement


console.log("Taking a decision");
let raita = true;
let biscuit = true;

if (raita) {
    console.log("Buy samosa");
} else if (biscuit) {
    console.log("Buy biscuit");
} else {
    console.log("Don't buy anything");
}

// 6th Example: Complex decision-making with budget and cycle color with a regular "if" statement


console.log("Taking a decision");
let budget = 40000;
let cycleCost = 40000;
let color = "blue"; // Original declaration

// Using logical AND and OR for complex conditions


if ((color === "black" || color === "blue" || color === "red") && cycleCost <= budget) {
    console.log("Buy a cycle");
} else {
    console.log("I need to build my skills to earn more");
}

// Variable assignments and comparisons


let num: any = "2"; // No 'any' concept in JavaScript, but used here for demonstration
let lastName = "hif";

// Comparison operators (== and ===) with comments


console.log(num); // 2
console.log(num == 2 || lastName == "hif"); // true (loose equality)
console.log(num === 2); // false (strict equality)

// Single assignment and condition check with a regular "if" statement


let car: string = "BMW";
let carColor: string = "red";
if (carColor !== "black") {
    console.log("The color is not black");
}

// Additional Example: Nested if statement


let isRaining: boolean = false;
let isSunny: boolean = true;

// Nested "if" statement


if (isRaining) {
    console.log("It's raining. Take an umbrella.");
} else {
    
    // Nested "if" statement inside the "else" block

    if (isSunny) {
        console.log("It's sunny. Enjoy the weather!");
    } else {
        console.log("Neither raining nor sunny. Check the weather later.");
    }
}
