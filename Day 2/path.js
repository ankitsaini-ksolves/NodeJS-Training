const path = require("path");
const filePath = path.join( "folder", "file.txt");
console.log(filePath);

const absolutePath = path.resolve("folder", "file.txt");
console.log(absolutePath);

console.log(path.basename('/folder/file.txt'));
console.log(path.dirname('/folder/file.txt'));
console.log(path.extname('/folder/file.txt'));


