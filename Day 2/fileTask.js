//-- Callback based function
const fs = require("fs");
function fileCallback(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

fileCallback("example.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
  } else {
    console.log("File content:", data);
  }
});



//-- Promise based function
const fs = require("fs").promises;

function readFileAsync(filePath) {
  return fs.readFile(filePath, "utf8");
}

const filePath = "example.txt";

readFileAsync(filePath)
  .then((content) => {
    console.log("File content:", content);
  })
  .catch((err) => {
    console.error("Error reading file:", err.message);
  });




//-- async/await based function
const fs = require("fs").promises;

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

(async () => {
  const filePath = "example.txt";
  try {
    const content = await readFileAsync(filePath);
    console.log("File content:", content);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
})();

