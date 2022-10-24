// new object
const currentClass1 = new Object();
currentClass1.title = "Programming 1";
console.log(currentClass1);

// {}
const currentClass2 = {
  title: "Programming 1",
  level: "moderate",
  room: "A13",
  students: [
    {
      name: "Mardoek",
    },
    {
      name: "Mario",
    },
    {
      name: "Alex",
    },
  ],
  teacher: {
    name: "Michael Vanderpoorten",
    age: 30,
    address: {
      street: "Street",
      number: 10,
    },
  },
};

const getStudentsString = (students) => {
  return students
    .map((student) => {
      return student.name;
    })
    .join(", ");
};

console.log(
  `De studenten ${getStudentsString(currentClass2.students)} krijgen ${
    currentClass2.title
  } van ${currentClass2.teacher.name}`
);

// constructor function
function CurrentClass(title, teacher) {
  this.title = title;
  this.teacher = {
    name: teacher,
  };
}

const pgm1 = new CurrentClass("Programming 1", "Michael Vanderpoorten");
const webdesign = new CurrentClass("Web Design 1", "Evelien Rutsaert");
const computerSystems = new CurrentClass("Computersystemen", "Adriaan Glibert");
