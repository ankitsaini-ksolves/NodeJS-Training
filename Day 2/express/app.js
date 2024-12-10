const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Homepage</h1>
                <p>This is the home page of our Express server.</p>
            </body>
        </html>
    `);
});

app.get("/about", (req, res) => {
  res.send(`
        <html>
            <head><title>About</title></head>
            <body>
                <h1>About Us</h1>
                <p>Learn more about us on this page.</p>
            </body>
        </html>
    `);
});

app.get("/contact", (req, res) => {
  res.send(`
        <html>
            <head><title>Contact</title></head>
            <body>
                <h1>Contact Us</h1>
                <p>Feel free to reach out to us.</p>
            </body>
        </html>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
