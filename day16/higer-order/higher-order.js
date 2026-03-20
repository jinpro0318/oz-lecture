// Array.map()
// 배열을 다른 배열로 매핑할 때 사용
const prepareMovies = () => {
  const movies = [];
  let movie1 = {
    title: "쇼생크 탈출",
    director: "프랭크 다라본트",
    year: 1994,
    genre: "드라마",
  };
  let movie2 = {
    title: "인셉션",
    // director: "크리스토퍼 놀란",
    year: 2010,
    genre: "액션, SF",
  };
  let movie3 = {
    title: "기생충",
    // director: "봉준호",
    year: 2019,
    genre: "드라마, 스릴러",
  };

  movies.push(movie3);
  movies.push(movie1);
  movies.push(movie2);
  movies.push({
    title: "어벤져스: 엔드게임",
    director: "안소니 루소, 조 루소",
    year: 2019,
    genre: "액션, 어드벤처, SF",
  });
  return movies;
};

const movies = prepareMovies(); // day12 movie-collection
console.log(movies);

// title만 뽑아서 확인하고 싶다.
const titles = [];
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  const title = movie.title;
  titles.push(title);
}
console.log(titles);

const titlesByMap = movies.map((movie) => {
  const title = movie.title;
  return title;
});
console.log(titlesByMap);

const titlesByMapShort = movies.map((movie) => movie.title);
console.log(titlesByMapShort);

// {title, director}만 있는 배열을 확인하고 싶다.
// for문
const infoArr = [];
for (const movie of movies) {
  infoArr.push({
    title: movie.title,
    director: movie.director,
  });
}
for (const movie of movies) {
  const { title, director } = movie;
  infoArr.push({
    title, // title: title
    director, // director: director
  });
}
for ({ title, director } of movies) {
  infoArr.push({ title, director });
}
console.log(infoArr);

// map
const infoArrByMap = movies.map((movie) => {
  return {
    title: movie.title,
    director: movie.director,
  };
});

const infoArrByMap2 = movies.map(({ title, director }) => {
  return { title, director };
});
console.log(infoArrByMap2);

// 모든 movie에 hit:0 속성을 넣어주고 싶다.  // ...rest
const newMovies = movies.map((movie) => {
  console.log(movie);
  return {
    ...movie, // genre: movie.genre, title: movie.title, year: movie.year
    hit: 100,
  };
});
console.log(newMovies);

// 모든 Movie의 director 값을 "taem"으로 바꾸고 싶다.
// 객체내에 중복된 키값이 있으면 뒤에 선언된 키값으로 적용되기 때문에
const taemMovie = movies.map((movie) => {
  return {
    ...movie, // director: movie.director, title: movie.title, year: movie.year
    director: "taem",
  };
});
console.log(taemMovie);

// filter
let numbers = [1, 2, 3, 4, 5];
// 짝수 뽑아내기
// for문
const evenArr = []; // [2, 4]
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 == 0) evenArr.push(num);
}

// filter
const evenArrFilter = numbers.filter((num) => {
  return num % 2 === 0;
});

// 2000년 이후의 영화만 필터링
const moviesAfter2000 = movies.filter((movie) => {
  let year = movie.year;
  if (year >= 2000) return true;
  else return false;
});
console.log(moviesAfter2000);
const moviesAfter2000Short = movies.filter((movie) => movie.year >= 2000);

// reduce

// foreach (for처럼 배열을 반환하지 않는다. 단순히 돌기만 한다)
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});

// reduce
const sumReduce = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
const sumReduceShort = numbers.reduce((acc, num) => acc + num, 0);

///////////////////////////////
// 함수 조합
numbers = [1, 2, 3, 4, 5];
// 짝수만 뽑아서 2를 곱해서 전체 합산하는 로직.

const a = numbers.filter((num) => num % 2 === 0);
const b = a.map((num) => num * 2);
const c = b.reduce((acc, num) => acc + num, 0);

const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log(result);
