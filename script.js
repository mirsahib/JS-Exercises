/* JavaScript code here */
console.log('External Javascript');

function summation(arr){
    sum = 0;
    arr.forEach(function(item,index){
        sum = sum+item;
    })
    return sum;
}

console.log(summation([1,2,3,4,5]))