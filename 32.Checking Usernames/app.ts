let currrent_users:string[]=['Mustajab','Ammara','Zahra','Umaima','Maryam'];
let new_users:string[]=['Fahad','Ammara','Unab','Mustajab','Samar']

new_users.forEach((newUser)=>{
    if (currrent_users.some
    (
         (currrent_users)=>currrent_users.toLowerCase()===newUser.toLowerCase()
    ))
    {
        console.log(`${newUser} Will Need To Enter New User Names.`);
    }
    else{
        console.log(`${newUser} Is Available.`);
    }
})
