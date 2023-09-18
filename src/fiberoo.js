function fib() {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    if (i < 2) arr.push(i);
    else arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

console.log(fib());

function numToStrings(arr) {
  return _.map(arr, (n) => `${n}`);
}

console.log(numToStrings(fib()));

function numEvenNums(arr) {
  return _.reduce(arr, (acc, n) => (n % 2 === 0 ? 1 : 0) + acc, 0);
}

console.log(numEvenNums(fib()));
