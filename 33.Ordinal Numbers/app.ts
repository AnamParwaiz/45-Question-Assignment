let numbers=[1,2,3,4,5,6,7,8,9];

for (let index = 0; index < numbers.length; index++) {
 if(numbers[index]==1){
    console.log(`${numbers[index]}ST`);
 }
 else if(numbers[index]==2){
    console.log(`${numbers[index]}ND`);
 }
 else if(numbers[index]==3){
    console.log(`${numbers[index]}RD`);
 }
 else if(numbers[index] >= 4 && numbers[index] <= 9){
    console.log(`${numbers[index]}TH`);
 }
}