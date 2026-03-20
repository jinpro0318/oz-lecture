let firstName = "Taem";
let lastName = "Kim"
const fullName = firstName + lastName;
const fullName2 = `${firstName} ${lastName}`;
var age = 20;
let realAge = 33;
const pet = {
    name : "김태구",
    age : 4,
    color: "brown",
    breed: "poodle",
    vaccinations: ["광견병", "코로나", "심장병"],
    favors: [
        {
            id: 0,
            name: "산책",
            preference: 9
        },
        {
            id: 1,
            name: "닭가슴살 동결건조",
            preference: 10
        },
        {
            id: 2,
            name: "목욕",
            preference: 1
        }
    ]
};

// console.log(pet)
// console.log("age", age);
// console.log("realAge", realAge);
let showAge;
// console.log(showAge);
showAge = age;
// console.log(showAge);
// showAge = realAge;
// console.log(showAge);

const myMessage = `안녕하세요. 
저의 이름은 ${fullName}입니다.
저는 ${showAge}살 입니다. 
거짓말이고요. 사실은 ${realAge}입니다.
${realAge - showAge}년만큼 젊게 살고싶습니다.`

const petMessage = `강아지를 키웁니다.
제가 키우는 ${pet.breed}의 이름은 ${pet.name}입니다.
${pet.name}은 올해 ${pet.age}살이고요. ${pet.color}색입니다.
${pet.vaccinations[0]}, ${pet.vaccinations[1]}, ${pet.vaccinations[2]}을/를 접종했습니다.
======
좋아하는 것 ${pet.favors[0].id + 1} : ${pet.favors[0].name} / 선호도 ${pet.favors[0].preference}
좋아하는 것 ${pet.favors[1].id + 1} : ${pet.favors[1].name} / 선호도 ${pet.favors[1].preference}
좋아하는 것 ${pet.favors[2].id + 1} : ${pet.favors[2].name} / 선호도 ${pet.favors[2].preference}
`
const results = {
    person: myMessage,
    pet: petMessage
}

console.log(results.person);
console.log(results.pet);