// Exercise 1

function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(5, 2);
let counter2 = makeCounter(0, 1);

counter1();
counter1();

counter2();
counter2();
