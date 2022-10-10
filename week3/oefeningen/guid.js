function generateGUID(amount) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let password = "";
  for (let i = 0; i < 10; i++) {
    const index = Math.round(Math.random() * (characters.length - 1));
    password += characters[index];
  }
  return password;
}

console.log(generateGUID(10));
console.log(generateGUID(18));
