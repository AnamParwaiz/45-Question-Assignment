console.log(`\nNames Of Famous Books Names With Their Authors Are : \n`);
interface items{
    bookname:string
    author:string
}

let book1:items={
  bookname:'Animal Farm',
  author:'George Orwell'
};

let book2:items={
    bookname:'A Tale Of Two Cities',
    author:'Charles Dickens'
};

let book3:items={
    bookname:'Alice In Wonderland',
    author:'Lewis Carrol'
}
console.log(`NAME : ${book1.bookname}\nAUTHOR : ${book1.author}\n`);
console.log(`NAME : ${book2.bookname}\nAUTHOR : ${book2.author}\n`);
console.log(`NAME : ${book3.bookname}\nAUTHOR : ${book3.author}\n`);
