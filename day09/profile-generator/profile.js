var userName = "김효진"; 
let userAge = 41;        
const isStudent = true;

let emptyValue = null;
let notAssigned;
const userId = Symbol("id");
const bigNumber = 99999999999999999999n;

const profile = {
    name: userName,
    age: userAge,
    status: "Active"
};

const hobbies = ["Reading", "Gaming", "Coding"];
const introMessage = "안녕하세요!\t저의 이름은 " + profile.name + "입니다.\n" + 
                     "나이는 " + profile.age + "세이며, 학생 여부는 " + isStudent + "입니다.";
const hobbyList = "My hobbies: " + hobbies.join(", ");

console.log(introMessage);
console.log(hobbyList);
console.log("현재 사용자의 이름은 " + profile.name + "이고 상태는 " + profile.status + "입니다.");
console.log("hobbies 변수 타입:", typeof hobbies); 
console.log("isStudent 변수 타입:", typeof isStudent); 