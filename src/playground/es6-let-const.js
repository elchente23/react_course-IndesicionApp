var nameVar = 'Mike';
var nameVar = 'John';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//nameConst = 'Gunter';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = 'Mike Lee';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);