// 41 . " MAGICIANS "  //
var magician_name = ["Harry Houdini", "Shin Lim", "Dynamo", "David Blaine", "Derren Brown"];
function show_magicians(magician_name) {
    magician_name.forEach(function (magician_name) {
        console.log(magician_name);
    });
}
show_magicians(magician_name);
// 42 . " GREAT MAGICIANS" //
function make_great(magician_name) {
    for (var index = 0; index < magician_name.length; index++) {
        magician_name[index] = magician_name[index] + "The Great";
    }
}
make_great(magician_name);
// 43 . " UNCHANGED MAGICIANS "  //
function made_great(magician_name) {
    var greatMagicians = [];
    magician_name.forEach(function (magician_name) {
        greatMagicians.push("".concat(magician_name, " the Great"));
    });
    return magician_name;
}
var greatMagicians = made_great(magician_name.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magician_name); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
