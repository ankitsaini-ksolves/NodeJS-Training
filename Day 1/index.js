const fs = require("fs");
const math = require("./math");
// const { add, subtract } = require("./math");



fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Addition:", math.add(5, 3));
console.log("Subtraction:", math.subtract(5, 3));

