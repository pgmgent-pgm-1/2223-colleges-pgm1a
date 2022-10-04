// function
function addition1(a = 10, b = 5) {
  return a + b;
}

// arrow function
const addition2 = (a, b) => {
  return a + b;
};

console.log(addition1());
console.log(addition1(20));
console.log(addition1(20, 6));
