const express = require('express'),
    compression = require('compression'),
    helmet = require('helmet'),
    app = express();

app.listen(3333, function() {
    console.log("listening on port 3333");
});

//middleware
app.use(compression())
app.use(helmet())

//routes
const rootController = require("./routes/index"),
    allController = require("./routes/all");

// Express use the router that we've exported
app.use("/", rootController);
app.use("/all", allController);

app.get("/wp", function(req, res) {
    const { name } = req.query;
    let snippet = `<h1>Hello ${name}</h1>`

    if (!name) {
        snippet = `<h1>NO NAME PROVIDED</h1>`
        res.status(500)
            .send(snippet)
            .end()
    }

    res.status(200)
        .send(snippet)
        .end();
});

app.get("/cats", function(req, res) {
    const { name } = req.query;
    let snippet = `<h1>Meow</h1>`

    res.status(500)
        .send(snippet)
        .end()
});

app.get("/dogs", function(req, res) {
    const { name } = req.query;
    let snippet = `<h1>Woof</h1>`

    res.status(500)
        .send(snippet)
        .end()
});

app.get("/cats_and_dogs", function(req, res) {
    const { name } = req.query;
    let snippet = `<h1>Living together</h1>`

    res.status(500)
        .send(snippet)
        .end()
});