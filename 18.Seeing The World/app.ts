let places:string[]=["Makkah" , "Madinah" , "Turkey" , "Switzerland" , "London"];
console.log(`Orginal : ` + [places]);

console.log(`Alphabatical Order : ` +[...places].sort());

console.log(`Orginal Order : ` + [places]);

console.log( `Reverse Alphabetical Order : `+[...places].sort().reverse());

console.log(`Orginal Order Again : ` + [places]);

console.log( `Reverse Alphabetical Order : `+[...places].sort().reverse());

console.log(`Reverse Again Alphabetical Order To Original Order : `+[places].sort());

let changedPlaces:String[]=["London" , "Madinah" , "Madinah" , "Switzerland" , "Turkey"];
console.log(`Order Has Been Changed : ` + [changedPlaces]);

let rerverseChangedPlaces:string[]=["Makkah" , "Madinah" , "Turkey" , "Switzerland" , "London"]
console.log(`Order Has Changed : ` + [rerverseChangedPlaces]);




