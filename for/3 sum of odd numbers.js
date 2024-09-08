

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/


// SUM OF ODD NUMBERS 
let oddsum = 0;
for(i=91; i<=129; i+=2){
    if(i%2 !== 0){
    console.log(i);
    oddsum = oddsum + i;
    }
}
console.log('Total Odd Sum: ',oddsum);

// SUM OF EVEN NUMBERS 
let evensum = 0;
for(let j = 51; j <= 85; j++){
    if(j%2 === 0){
        console.log(j);
        evensum = evensum + j;
    }
}
console.log('Total Even Sum: ',evensum);