const books = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    alreadyRead: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false,
  },
  {
    title: "De Da Vinci Code",
    author: "Dan Brown",
    alreadyRead: true,
  },
];

const text = `
========================================================================
|                               READING LIST                           |
========================================================================
${books
  .map((book) => {
    if (book.alreadyRead) {
      return `You already read ${book.title} by ${book.author}`;
    } else {
      return `You still need to read ${book.title} by ${book.author}`;
    }
  })
  .join("\n")}
========================================================================
`;

console.log(text);
