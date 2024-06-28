function make_album(ArtistName, Albumtitle) {
    return { ArtistName: ArtistName, Albumtitle: Albumtitle };
}
var album1 = make_album("Adjusters", "Before The Revolution");
var album2 = make_album("Aerosmith", "Big Ones");
var album3 = make_album("Aerosmith", "Get A Gip");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(ArtistName, Albumtitle, NumberOfTracks) {
    return { ArtistName: ArtistName, Albumtitle: Albumtitle, NumberOfTracks: NumberOfTracks };
}
var album4 = make_album2("Anti_Flag", " For Blood And Empire", 22);
var album5 = make_album2("Avali", "Dixie", 45);
var album6 = make_album2("Army Of Juan", "Self Title", 56);
console.log(album4);
console.log(album5);
console.log(album6);
