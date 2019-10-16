const express = require('express');
const compression = require('compression');
const helmet = require('helmet')

const app = express();
app.listen(3333, function() {
    console.log("listing on 3333")
});

app.use(compression());
app.use(helmet());

const data = {
    shonen: [
        { name: "Goku", power: "Ki" },
        { name: "Luffy", power: "Gum-Gum"},
        { name: "Gon", power: "Nen"}
    ]
}

const rootcontroller = function(req, res) {
    const snippet = `<h1>Hello World!</h1>`;
    res.status(200)
    .send(snippet)
    .end();
    
};

app.get("/", rootcontroller);

app.get("/all", function(req, res) {
    let json ={
        data
    };
    
    res.status(200)
    .send(json)
    .end();
});

app.get("/wp", function(req, res) {
    const { name } = req.query;
    let snippet = `<h1>Hello ${name}</h1>`;

    if (!name) {
        snippet = `<h1>I AM ERROR</h1>`;
        res.status(500)
        .send(snippet)
        .end();
    }

    res.status(200)
    .send(snippet)
    .end();
});

app.get("/year", function(req, res) {
    const { age } = req.query;
    let born = (age - 2019)
    let snippet = `<h1>You were born in ${born}</h1>`;

    if (!age) {
        snippet = `You are a corporeal being.. now try again`
        res.status(500)
        .send(snippet)
        .end();
    }
    res.status(200)
    .send(snippet)
    .end();
});
// debugger
//node --inspect-brk app.js