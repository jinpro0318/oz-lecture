function gugudan3() {
    for (let i = 1; i < 10; i++) {
        console.log(`3 x ${i} = ${3 * i}`);
    }
}

const gugudan4 = function () {
    for (let i = 1; i < 10; i++) {
        console.log(`4 x ${i} = ${4 * i}`);
    }
}

const gugudan5 = () => {
    for (let i = 1; i < 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }
}

// return이 void()임
function gugudan(num) {
    for (let i = 1; i < 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// gugudan3();
// gugudan4();
// gugudan5();
// gugudan(11);

const sum = function(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}
const result = sum(434,12132);
console.log(result);


const sumScore = (scores) => {
    let sumVal = 0;
    for (const score of scores) {
        sumVal += score
    }
    return sumVal;
}

const avgScore = (scores) => {
    return sumScore(scores) / scores.length;
}

const scores = [70, 80, 40, 100] // math, eng, mus, sci
const total = sumScore(scores);
const avg = avgScore(scores);
console.log(`total: ${total}`);
console.log(`avg: ${avg}`);
