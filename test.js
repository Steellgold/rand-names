const { generateName, generateMultipleNames } = require("./dist/index");

console.log("Random name in French:", generateName("fr", 1, ["food"]));
console.log("Random name in English and French:", generateName(["fr", "en"], 2, ["food"]));
console.log("10 Random names:", generateMultipleNames(10, [], 3, ["food", "cars"]));