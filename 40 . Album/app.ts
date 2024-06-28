function make_album(ArtistName:string , Albumtitle:string){
    return {ArtistName , Albumtitle}
}
let album1 = make_album("Adjusters" , "Before The Revolution");
let album2 = make_album("Aerosmith" , "Big Ones");
let album3 = make_album("Aerosmith" , "Get A Gip");

console.log(album1);
console.log(album2);
console.log(album3);

function make_album2(ArtistName:string , Albumtitle:string , NumberOfTracks?:number){
    return {ArtistName , Albumtitle , NumberOfTracks}
}
let album4 = make_album2("Anti_Flag" , " For Blood And Empire" , 22);
let album5 = make_album2("Avali" , "Dixie" , 45);
let album6 = make_album2("Army Of Juan" , "Self Title" , 56)

console.log(album4);
console.log(album5);
console.log(album6);