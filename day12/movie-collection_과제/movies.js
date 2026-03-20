// const 사용: 변경되지 않는 기본 장르 설정
const DEFAULT_GENRE = "Unknown"; 

// let과 배열 사용: 영화 객체를 저장하는 배열 선언
let movies = [
    // [객체] 최소 3개의 영화 객체를 하드코딩으로 생성 (title, director, year, genre)
    { title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi" },
    { title: "Inception", director: "lan", year: 2010, genre: "Sci-Fi" },
    { title: "Parasite", director: "Bong", year: 2019, genre: "Drama" }
];

// 영화 목록 출력 함수
function printMovies(movieList) {
    // 영화 목록 시작 제목 출력
    console.log("Movie Collection:");
    // var 사용: 영화 개수를 카운트하는 변수
    var count = 0;
    // for 반복문 사용: 영화 목록 순회하며 출력
    for (let i = 0; i < movieList.length; i++) {
        // let 사용: 현재 순회 중인 영화 객체 저장
        let movie = movieList[i];
        // 조건문과 연산자: 빈 속성 확인 및 기본값 설정
        // 매개변수/속성 기본값: genre가 빈 문자열일 경우 DEFAULT_GENRE 사용
        if (!movie.genre) {
            movie.genre = DEFAULT_GENRE;
        }
        // 만약 다른 속성이 비어있을 경우를 대비한 추가 검사 (기능 요구사항 반영)
        if (!movie.director) movie.director = "Unknown";
        if (!movie.title) movie.title = "Unknown";
        // 지정된 형식에 맞춰 영화 정보 출력 (번호는 i + 1)
        console.log(
            (i + 1) + ". Title: " + movie.title + 
            ", Director: " + movie.director + 
            ", Year: " + movie.year + 
            ", Genre: " + movie.genre
        );
        count++; // 영화 수 증가
    }
    // 총 영화 수를 형식에 맞춰 출력
    console.log("Total Movies: " + count);
}

// 함수 호출
printMovies(movies);