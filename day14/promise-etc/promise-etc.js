// race, any 테스트

const raceTest = () => {
  const p1 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("느린성공"), 5000),
  );
  const p2 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("빠른성공"), 2000),
  );
  const p3 = new Promise((resolve, reject) =>
    // setTimeout(() => resolve("가장빠른성공"), 1000),
    setTimeout(() => reject(new Error("가장빠른실패")), 1000),
  );
  Promise.race([p1, p2, p3])
    .then((result) => {
      console.log("race 결과:", result);
    })
    .catch((error) => {
      console.log("race 에러:", error);
    });
};

const anyTest = () => {
  const p1 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("느린성공"), 5000),
  );
  const p2 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("빠른성공"), 2000),
  );
  const p3 = new Promise((resolve, reject) =>
    // setTimeout(() => resolve("가장빠른성공"), 1000),
    setTimeout(() => reject(new Error("가장빠른실패")), 1000),
  );
  Promise.any([p1, p2, p3])
    .then((result) => {
      console.log("any 결과:", result);
    })
    .catch((error) => {
      console.log("any 에러:", error);
    });
};

// raceTest();
anyTest();
