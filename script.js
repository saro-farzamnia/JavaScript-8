// for(let i=10; i>=0; i--){
//     console.log(i)
// }


// let i=10;
// do {
//     console.log(i)
//     i--;
// } while (i>=0);


const numbers=[13,15,20,22,28,31,54,53];
const evenNumbers=[];
const oddedNumbers=[];
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]%2===0){
//         console.log(numbers[i]);
//         evenNumbers.push(numbers[i]);
//     }else{
//         oddedNumbers.push(numbers[i]);
//     }
// }
// console.log(evenNumbers)
// console.log(oddedNumbers)


for(const value of numbers){
    if(value%2!==0){
        console.log(value);
        oddedNumbers.push(value);
    }
}
console.log(oddedNumbers)