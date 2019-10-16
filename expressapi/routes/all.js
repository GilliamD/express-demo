const express = require("express"),
    router = express.Router();

    const data = {
        shonen: [
            { name: "Goku", power: "Ki" },
            { name: "Luffy", power: "Gum-Gum"},
            { name: "Gon", power: "Nen"}
        ]
    }    

router.get("/", (req, res) => {
    let json ={
        data
    };
    
    res.status(200)
    .send(json)
    .end();
    });

module.exports = router;
