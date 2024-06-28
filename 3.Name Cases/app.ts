let personName:string="Anam Parwaiz";

// For LowerCase //
console.log("LowerCase : ", personName.toLocaleLowerCase());

// For UpperCase //
console.log("UpperCase :", personName.toLocaleUpperCase());

//For TitleCase //
console.log("TitleCase :", personName.replace(/\bw/g,c => c.toUpperCase()));

