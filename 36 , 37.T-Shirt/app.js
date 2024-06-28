// 36 ." T-SHIRT " //
function make_shirt(size, message) {
    console.log("The Shirt Will Be ".concat(size, " And That Lines ").concat(message, " Printed On Shirt."));
}
make_shirt("small", "Life Is Full Of Happiness And Pains . So Always keep Smile On your Face");
// 37 . " LARGE SHIRTS " //
function make_Shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("The Shirt Will Be ".concat(size, " And That Lines ").concat(message, " Printed On Shirt."));
}
make_Shirt();
make_Shirt("Small");
make_Shirt(undefined, "Always Be Careful From Wrong People !");
