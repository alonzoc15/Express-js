const express = require('express'),
    router = express.Router();

const data = {
    powerRangers: [
        { name: 'Jason', zord: 'T-Rex' },
        { name: 'Billy', zord: 'Triceratops' }
    ]
};

router.get("/", (req, res) => {
    let json = {
        data
    };

    res.status(200)
        .send(json)
        .end();
});


module.exports = router;

/*
let json = {
    data
};

res.status(200)
    .send(json)
    .end();
});
*/