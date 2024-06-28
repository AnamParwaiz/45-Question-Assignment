"use strict";
// Exercise 14 //  // Guest List //
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
let guest_list = ['Hafsa', 'Fahad', 'Hifza', 'Ayan'];
exports.guest_list = guest_list;
//   for (let index = 0; index < guest_list.length; index++) {       
//   console.log(' Respected Sir/Madam,\nAssalam O Alaikum ! '  +  guest_list[index]  +  ' I Would Like To Invite You For Dinner Tomorrow At 5 Star Hotel.So Please Attend My Dinner Party.\nThank You !\n ')
//    }
// Exercise 15 //  // Changing Guest List //
let not_coming = "Fahad";
let new_guest = "Ayeza Khan";
guest_list[1] = new_guest;
//   for (let index = 0; index < guest_list.length; index++) {
//   console.log(' Respected Sir/Madam,\nAssalam O Alaikum ! '  +  guest_list[index]  +  ' I Would Like To Invite You For Dinner Tomorrow At 5 Star Hotel.So Please Attend My Dinner Party.\n\Thank You !\n')  }
//   console.log(`Mr ${not_coming} will not attend tomorrow dinner party due to some emergency`);
// Exercise 16 //  // More Guests //
guest_list.unshift("Hania Amir", "Yumna Zaidi", "Iqra Aziz");
// for (let index = 0; index < guest_list.length; index++) {
//    console.log(' Respected Sir/Madam,\nAssalam O Alaikum ! '  +  guest_list[index]  +  ' I Would Like To Invite You For Dinner Tomorrow At 5 Star Hotel.Actually I Found A Big Table So Please Attend My Party.\n\Thank You !\n')
// }
// Exercise 17 //  // Shrinking Guest List //
console.log("Unfortunately,I Can Not Arrange A Big Table For Tomorrow Dinner.Only Two Of You Are Invited");
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam ${remove_guest} You Are Not Invited For Tomorrow Dinner.`);
}
;
for (let index = 0; index < guest_list.length; index++) {
    console.log(' Respected Sir/Madam,\nAssalam O Alaikum ! ' + guest_list[index] + ' Yes , You Are Still Invited On Tomorrow Dinner.\n\Thank You !\n');
}
;
guest_list.splice(0, 2);
console.log(guest_list);
