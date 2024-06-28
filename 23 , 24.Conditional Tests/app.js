//       EXERCISE  23 & 24 (CONDITIONAL TESTS)         //
var number = 22;
var mountain = "Karakoram Range";
var array = [1, 3, 7, "ali", "zahra", 2];
// Test 1: Equal To (True)
console.log("Is number == 50 ? I predict False.");
console.log(number == 50);
// Test 2: Equal Value & Equal Type (True)
console.log("Is number === 50 ? I predict False");
console.log(number === 50);
// Test 3: Inequality OR Not Equal (False)
console.log("Is number != 50 ? I predict True");
console.log(number != 50);
// Test 4:Inequality Value & Type OR Not Equal Value & Type(False)
console.log("Is number !== 250 ? I predict True");
console.log(number !== 50);
// Test 5: Greater Than(True)
console.log("Is number > 50 ? I predict False");
console.log(number > 50);
// Test 6:Less Than 9=(False)
console.log("Is number < 50 ? I predict True");
console.log(number < 50);
// Test 7:Greater Than & Equal To(True)
console.log("Is number >= 50 ? I predict False");
console.log(number >= 50);
// Test 8:Less Than & Equal To(False)
console.log("Is number <= 50 ? I predict True");
console.log(number <= 50);
// Test 9:Checking Truthiness(True)
console.log("Is number ? I predict True");
console.log(number ? true : false);
// Test 10:Checking Falsiness (False)
console.log("Is !number ? I predict False");
console.log(!number);
// Test : Equality With String (True)
console.log("Is Mountain == K2 ? I predict True");
console.log(mountain == "K2");
// Test : Inequality With String (False)
console.log("Is Mountain !== K2? I predict True");
console.log(mountain !== "K2");
// Test : Using LowerCase Function (True)
console.log("Is Mountain.tolowercase() == K2? I predict False");
console.log(mountain.toLowerCase() == "K2");
// Test : Using LowerCase Function (False)
console.log("Is Mountain.tolowercase() !== K2? I predict True");
console.log(mountain.toLowerCase() !== "K2");
// LOGICAL OPERATORS ( AND & OR)
// Test : Using AND Operators (True)
console.log("Is number > 50 && < 22 ? I predict True");
console.log(number == 22 && number < 50);
// Test : Using OR Operator (False)
console.log("Is number > 50 || < 22 ? I predict False");
console.log(number > 50 || number < 22);
// ARRAY TESTS 
// Test : Item Is In Array(True)
console.log("Is zahra in array ? I predict True");
console.log(5 in array);
// Test : Item Is Not In Array(False)
console.log("Is 7 is not in array? i predict False");
console.log(7 in array);
