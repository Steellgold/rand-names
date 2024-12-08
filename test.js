const { generateName, generateMultipleNames } = require("./dist/index");

console.log("Pseudo aléatoire :", generateName("fr", 1));
console.log("10 Pseudos aléatoires :", generateMultipleNames(10, "en", 3));