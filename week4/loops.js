// break
const lecturers = ["Adriaan", "Michael", "Evelien"];

for (const lecturer of lecturers) {
  if (!lecturer.includes("e")) {
    break;
  }
  console.log(lecturer);
}
