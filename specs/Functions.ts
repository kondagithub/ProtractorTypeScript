
function add(num1:number, num2?:number):number{
    if(num2){
        return num1+num2;
    }else{
        return num1;
    }
}

console.log(add(10,20));
console.log(add(10));

function subract(num1:number, num2: number = 10):number{
    return (num1-num2);
}

console.log(subract(20,5));
console.log(subract(20));

function fullName(person:{firstName:string, lastName:string}){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {firstName:'Konda', lastName:'Reddy'}

console.log(fullName(p))