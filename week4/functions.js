function sayHello() {
  console.log("Hello");
}

const sayHelloAlternative = () => {
  console.log("Hello 2");
};

// function vs arrow
const person = {
  name: "Michael",
  sayName: function () {
    console.log(this.name);
  },
  sayNameArrow: () => {
    console.log(this.name);
  },
};

person.sayName(); // "Michael"
person.sayNameArrow(); // undefined
