// 41 . " MAGICIANS "  //

let magician_name:string[]=["Harry Houdini","Shin Lim","Dynamo","David Blaine","Derren Brown"]

function show_magicians(magician_name:string[]){
    magician_name.forEach(magician_name=>{
        console.log(magician_name);
    })
}
show_magicians(magician_name);

// 42 . " GREAT MAGICIANS" //

function make_great(magician_name:string[]){
    for (let index = 0; index < magician_name.length; index++) {
        magician_name[index] = magician_name[index] + "The Great";
    }
}
make_great(magician_name);


// 43 . " UNCHANGED MAGICIANS "  //

function made_great(magician_name: string[]): string[] {
    let greatMagicians=[];
    magician_name.forEach(magician_name => {
        greatMagicians.push(`${magician_name} the Great`);
    });
    return magician_name
}

let greatMagicians = made_great(magician_name.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magician_name); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
