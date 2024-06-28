// EXERCISE # 30 (HELLO ADMIN)  //

let usernames:string[]=["Samra","Hiba","Admin","Aryan","Hamzah","Fahad"];

for(let User of usernames){
    if(User == "Admin"){
        console.log("Hello Admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${User}, thank you for logging in again.`);
    }
}

// EXERCISE # 31 ( NO USERS)  //

let username:string[]=["Samra","Hiba","Admin","Aryan","Hamzah","Fahad"];

if(username.length == 0){
    console.log("We Need To Find Some Users !");
}
 else{
    username=[]
    console.log("All Users Have Been Removed That We Don't Have Any User Means "+username.length )
}