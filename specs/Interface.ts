
interface Person{
    firstName : string;
    lastName : string;
}

function displaName(person : Person){

    console.log(`${person.firstName} ${person.lastName}`)
}

let person : Person =  {
    firstName : 'Konda',
    lastName : 'Reddy'

};

console.log(displaName(person));

