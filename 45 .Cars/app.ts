function make_Car(manufacturer: string, model: string, color: string,...options:[string , any][]):Object{
  let car = {manufacturer , model , color };
  options.forEach(([key , value])=>car=[key]=value);
  return car
}
console.log(make_Car("Volkswagen","Jetta","Red" , ["year" , 2022]));
console.log(make_Car("Honda","Civic","White" , ["year" , 2024]));

