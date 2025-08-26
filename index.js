const data = require("fs");
data.writeFileSync("hello.txt", "Hello Node js");
const dataa = data.readFileSync("hello.txt", "utf-8");
console.log(dataa);

data.appendFileSync("hello.txt", " Practice makes perfect");