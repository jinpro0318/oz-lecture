// String.length
const pw = "1234";
console.log(pw);
console.log(pw.length); // 문자열의 길이

if (pw.length < 8) {
  console.log("비밀번호는 8자 이상이어야 합니다.");
}

// String.includes()
const email = "test!naver.com";
console.log(email.includes("@")); // false
if (!email.includes("@")) {
  console.log("이메일 형식이 올바르지 않습니다.");
}

// String.indexOf()
console.log(email[0]); // t
console.log(email[2]); // s
console.log(email[3]); // t
console.log(email.indexOf("naver")); // 5
console.log(email.indexOf("@")); // -1: 문자열 내에 @가 존재하지 않음

if (email.indexOf("@") < 0) {
  console.log("이메일 형식이 올바르지 않습니다.");
}

// String.trim()
let userId = "  gildong1234  "; // 사용자가 방금 입력한 아이디
let userId2 = "gildong1234"; // DB에 저장된 아이디

console.log(userId === userId2); // false
console.log(userId.trim() === userId2); // true

// String.replace()
// String.replaceAll() - 모든 일치하는 부분을 바꿔줌
const needToDelDot = ".안녕하세요. 나는 태구와 함께 삽니다......";
console.log(needToDelDot.replace(".", ""));
console.log(needToDelDot.replaceAll(".", ""));

const emailTemplate = "이메일 형식이 올바르지 않습니다: {{{email}}}";
const outputMsg = emailTemplate.replace("{{{email}}}", email);
console.log(outputMsg);
