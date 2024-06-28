// 38 . " CITIES "  //

function describe_city(city :string , country :string = "Pakistan"){
    console.log(`${city} Is In ${country}`);
};

describe_city("Islamabad");
describe_city("Sawat");
describe_city("Istanbul");

// 39 . " CITY NAMES " //

function city_country(city : string , country:string){
    let info = `\n"${city} , ${country}"`
    return info
}
console.log(city_country("UAE" , "Abu Dhabi"));
console.log(city_country("Swetzerland" , "Bern"));
console.log(city_country("Oman" , "Muscat"));