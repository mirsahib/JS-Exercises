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

function validEmail(email){
    
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

console.log(validEmail("mirsahib24@gmail.com"))

//object 
var company = {
    name: 'Google', 
    age: 19, 
    ceo: {
    first_name: 'Sundar', 
    last_name: 'Pichai'
    }
};
console.log(company);
company.updateAge = function(newAge){
    this.age = newAge;
}
company.updateAge(25);
console.log(company);

//task 4
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
 
function readingStat(index){
    return library[index].readingStatus;
}

console.log("Reading status is "+readingStat(2));