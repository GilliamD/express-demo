const express = require("express"),
    router = express.Router();

    
    router.get("/:name", function(req, res){
        const { name } = req.query;
        let snippet = `<h1>Hello ${name}</h1>`;
        if (!name) {
            snippet = `<h1>I AM ERROR</h1>`;
            res.status(500)
            .send(snippet)
            .end();
        }
        else(
        res.status(200)
        .send(snippet)
        .end());
    }); 

router.get("/year", function(req, res) {
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

module.exports = router;