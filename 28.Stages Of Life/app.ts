let age: number = 15;
if (age < 1) {
    console.log("The Person Is A Baby")
}

else if (age >= 2 && age < 4) {
    console.log("The Person Is A Toddler");
}

else if (age >= 4 && age < 13) {
    console.log("The Person Is A Kid");
}

else if (age >= 13 && age < 20) {
    console.log("The Person Is A Teenager");
}

else if (age >= 20 && age < 65) {
    console.log("The Person Is A Adult");
}

else {
    console.log("The Person Is A Elder");
}
