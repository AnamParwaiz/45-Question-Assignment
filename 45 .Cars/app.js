function make_Car(manufacturer, model, color) {
    var options = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        options[_i - 3] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model, color: color };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car = (key = value[0], value);
    });
    return car;
}
console.log(make_Car("Volkswagen", "Jetta", "Red", ["year", 2022]));
console.log(make_Car("Honda", "Civic", "White", ["year", 2024]));
