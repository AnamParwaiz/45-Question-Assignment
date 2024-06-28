function sandwitch_Items() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMake A Sandwitch Using With Following Items :\n".concat(items.join(' , '), "\n"));
}
sandwitch_Items("ketchup", "Fried Egg", "Onion");
sandwitch_Items("Chicken", "Butter");
sandwitch_Items("Tomato", "Onion", "Mayonis", "Cauliflower");
