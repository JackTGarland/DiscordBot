const express = require("express");
const bodyParser = require("body-parser");
let app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));


app.listen("8080", ()=>{
    console.log("API Ready");
});