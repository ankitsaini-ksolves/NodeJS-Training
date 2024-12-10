const fs = require('fs');

//synchronous
fs.writeFileSync('test.txt',"Hello User!");

//Asynchronous
fs.writeFile('test.txt', "Hey, This is text file", (err)=>{
    if(err)
    console.log("Error Ocurred:", err)
});


const res = fs.readFileSync('test.txt', 'utf-8')
console.log(res);

fs.readFile('test.txt', 'utf-8', (err, res)=>{
    if(err) console.log(">>>>",err);
    else console.log(res);
})


//--Appends the file
fs.appendFileSync('test.txt',`\nFile Updated at ${Date.now()}`)



//--Make copy of the file
fs.copyFileSync('test.txt','copy.txt');



//-- Stats of the file
console.log(fs.statSync('test.txt'))


//Make directory
fs.mkdirSync("Root")
fs.mkdirSync("Parent/child",{recursive: true});

//Read directory
const result = fs.readdirSync('./')
console.log(result);
