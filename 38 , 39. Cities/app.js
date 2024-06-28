// 38 . " CITIES "  //
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " Is In ").concat(country));
}
;
describe_city("Islamabad");
describe_city("Sawat");
describe_city("Istanbul");
// 39 . " CITY NAMES " //
function city_country(city, country) {
    var info = "\n\"".concat(city, " , ").concat(country, "\"");
    return info;
}
console.log(city_country("UAE", "Abu Dhabi"));
console.log(city_country("Swetzerland", "Bern"));
console.log(city_country("Oman", "Muscat"));
