var currrent_users = ['Mustajab', 'Ammara', 'Zahra', 'Umaima', 'Maryam'];
var new_users = ['Fahad', 'Ammara', 'Unab', 'Mustajab', 'Samar'];
new_users.forEach(function (newUser) {
    if (currrent_users.some(function (currrent_users) { return currrent_users.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " Will Need To Enter New User Names."));
    }
    else {
        console.log("".concat(newUser, " Is Available."));
    }
});
