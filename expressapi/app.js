const express = require('express');
es6Renderer = require("express-es6-template-engine")
const compression = require('compression');
const helmet = require('helmet')
const app = express();

app.listen(3333, function() {
    console.log("listing on 3333")
});

//Middleware
app.use(compression());
app.use(helmet());

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

//Routes
const rootcontroller = require("./routes/index");
const allController = require("./routes/all");
const wpController = require("./routes/wp");
//const personController = require("./routes/person")

app.use("/", rootcontroller);

app.use("/all", allController);

app.use("/wp", wpController);

//app.use("/person", personController)
// debugger
//node --inspect-brk app.js