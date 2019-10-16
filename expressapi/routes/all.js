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
    res.status(200).render("template", {
        locals: {
            title: "Big Three",
            shonen: data.shonen
        },
        partials: {
            partial: "partial-all"
        }
    });
});

module.exports = router;