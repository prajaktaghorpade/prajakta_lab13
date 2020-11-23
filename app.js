const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.use(bodyparser.json());
app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");
});
app.get("/submit", function(req, res) {

    res.sendFile(__dirname + "/submit.html");
});






app.post('/', function(req, res) {



    const answer = "Cascading Style Sheets";
    const chosen = req.body.q;

    if (chosen == answer) {

        res.write("<h1 style=color:green;> CORRECT ANSWER </h1>");
        res.write("<h3> Answer chosen : </h3>" + chosen);
        res.write("<h3>The correct answer : Cascading Style Sheets </h3>");


    } else {
        res.write("<h1 style =color:red; > WRONG ANSWER </h1>");
        res.write("<h3> Answer chosen : </h3>" + chosen);
        res.write("<h3>The correct answer : Cascading Style Sheets </h3>");


    }


});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running at port 3000");
})