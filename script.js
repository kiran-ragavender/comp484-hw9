// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current date
const today = new Date();

// Get the month, day, and year
// getMonth() is 0-based (January = 0), so add 1
const monthNumber = today.getMonth() + 1;
const dayNumber = today.getDate();
const yearNumber = today.getFullYear();

// Add a leading zero to the month if it is a single digit (if/else #1)
let monthText;
if (monthNumber < 10) {
  monthText = "0" + monthNumber;
} else {
  monthText = String(monthNumber);
}

// Add a leading zero to the day if it is a single digit (if/else #2)
let dayText;
if (dayNumber < 10) {
  dayText = "0" + dayNumber;
} else {
  dayText = String(dayNumber);
}

// Build the message in the format "Today is MM/DD/YYYY" and show it on the page
const dateMessage = "Today is " + monthText + "/" + dayText + "/" + yearNumber;
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Starting values (all strings)
const ageString = "42";        // numeric string (integer)
const priceString = "19.75";   // numeric string with a decimal
const nameString = "hello";    // cannot be converted to a number
const scoreString = "100";     // numeric string (integer)

// Convert each value with Number()
const ageNumber = Number(ageString);
const priceNumber = Number(priceString);
const nameNumber = Number(nameString);
const scoreNumber = Number(scoreString);

// Check each converted value with Number.isNaN()
const ageIsNaN = Number.isNaN(ageNumber);
const priceIsNaN = Number.isNaN(priceNumber);
const nameIsNaN = Number.isNaN(nameNumber);
const scoreIsNaN = Number.isNaN(scoreNumber);

// Check each converted value with Number.isInteger()
const ageIsInteger = Number.isInteger(ageNumber);
const priceIsInteger = Number.isInteger(priceNumber);
const nameIsInteger = Number.isInteger(nameNumber);
const scoreIsInteger = Number.isInteger(scoreNumber);

// Pick a message for each value using if/else
let ageMessage;
if (ageIsNaN) {
  ageMessage = "This value is not a valid number.";
} else if (ageIsInteger) {
  ageMessage = "This value is an integer.";
} else {
  ageMessage = "This value is a valid number, but not an integer.";
}

let priceMessage;
if (priceIsNaN) {
  priceMessage = "This value is not a valid number.";
} else if (priceIsInteger) {
  priceMessage = "This value is an integer.";
} else {
  priceMessage = "This value is a valid number, but not an integer.";
}

let nameMessage;
if (nameIsNaN) {
  nameMessage = "This value is not a valid number.";
} else if (nameIsInteger) {
  nameMessage = "This value is an integer.";
} else {
  nameMessage = "This value is a valid number, but not an integer.";
}

let scoreMessage;
if (scoreIsNaN) {
  scoreMessage = "This value is not a valid number.";
} else if (scoreIsInteger) {
  scoreMessage = "This value is an integer.";
} else {
  scoreMessage = "This value is a valid number, but not an integer.";
}

// Build one sentence per value
const ageResult = "Original: \"" + ageString + "\" → Converted: " + ageNumber +
  " → isNaN: " + ageIsNaN + " → isInteger: " + ageIsInteger;
const priceResult = "Original: \"" + priceString + "\" → Converted: " + priceNumber +
  " → isNaN: " + priceIsNaN + " → isInteger: " + priceIsInteger;
const nameResult = "Original: \"" + nameString + "\" → Converted: " + nameNumber +
  " → isNaN: " + nameIsNaN + " → isInteger: " + nameIsInteger;
const scoreResult = "Original: \"" + scoreString + "\" → Converted: " + scoreNumber +
  " → isNaN: " + scoreIsNaN + " → isInteger: " + scoreIsInteger;

// Combine all results into ONE string (an HTML list)
const conversionOutput =
  "<ul>" +
  "<li>" + ageResult + "<br><em>" + ageMessage + "</em></li>" +
  "<li>" + priceResult + "<br><em>" + priceMessage + "</em></li>" +
  "<li>" + nameResult + "<br><em>" + nameMessage + "</em></li>" +
  "<li>" + scoreResult + "<br><em>" + scoreMessage + "</em></li>" +
  "</ul>";

// Display the results on the page
document.getElementById("numberConversionOutput").innerHTML = conversionOutput;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Price calculator values
const itemPriceText = "24.99 USD";                       // price as text from a "label"
const itemPrice = Number.parseFloat(itemPriceText);      // parseFloat reads 24.99 and ignores " USD"
const itemQuantity = 3;
const taxRate = 0.095;                                   // 9.5% sales tax
const standardShipping = 5.5;
const freeShippingMinimum = 75;

// Multiplication: subtotal = price × quantity
const subtotal = itemPrice * itemQuantity;

// Decide the shipping cost (if/else): free shipping at or above the minimum
let shippingCost;
let shippingMessage;
if (subtotal >= freeShippingMinimum) {
  shippingCost = 0;
  shippingMessage = "You qualify for free shipping!";
} else {
  shippingCost = standardShipping;
  shippingMessage = "Spend $" + (freeShippingMinimum - subtotal).toFixed(2) +
    " more to get free shipping."; // subtraction
}

// Multiplication: tax amount
const taxAmount = subtotal * taxRate;

// Addition: total cost
const totalCost = subtotal + taxAmount + shippingCost;

// Large number formatted with toLocaleString()
const ordersThisYear = 1284503;

// Build the output string (toFixed(2) formats money to 2 decimal places)
const mathOutput =
  "<ul>" +
  "<li>Item price (parsed from \"" + itemPriceText + "\"): $" + itemPrice.toFixed(2) + "</li>" +
  "<li>Quantity: " + itemQuantity + "</li>" +
  "<li>Subtotal: $" + subtotal.toFixed(2) + "</li>" +
  "<li>Tax (" + (taxRate * 100).toFixed(1) + "%): $" + taxAmount.toFixed(2) + "</li>" +
  "<li>Shipping: $" + shippingCost.toFixed(2) + "</li>" +
  "<li><strong>Total cost: $" + totalCost.toFixed(2) + "</strong></li>" +
  "</ul>" +
  "<p><em>" + shippingMessage + "</em></p>" +
  "<p>Orders placed this year: " + ordersThisYear.toLocaleString() + "</p>";

// Display the results on the page
document.getElementById("mathOutput").innerHTML = mathOutput;

// ==========================
// Part 4: Conditionals
// ==========================

// if/else statements used in this file:
// 1. Part 1 — adding a leading zero to the month
// 2. Part 1 — adding a leading zero to the day
// 3. Part 2 — choosing a NaN / integer / decimal message for each value
// 4. Part 3 — deciding whether shipping is free
