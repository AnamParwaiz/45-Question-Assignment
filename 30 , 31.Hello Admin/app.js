// EXERCISE # 30 (HELLO ADMIN)  //
var usernames = ["Samra", "Hiba", "Admin", "Aryan", "Hamzah", "Fahad"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var User = usernames_1[_i];
    if (User == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(User, ", thank you for logging in again."));
    }
}
// EXERCISE # 31 ( NO USERS)  //
var username = ["Samra", "Hiba", "Admin", "Aryan", "Hamzah", "Fahad"];
if (username.length == 0) {
    console.log("We Need To Find Some Users !");
}
else {
    username = [];
    console.log("All Users Have Been Removed That We Don't Have Any User Means " + username.length);
}
