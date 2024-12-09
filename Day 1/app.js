const greeting = require("./greetings");



function logMessage() {
    console.log(greeting);
}

setInterval(logMessage, 2000);
