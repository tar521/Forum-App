var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/health", (request, response) => {
    const status = {
        "status": "Running"
    };
    response.send(status);
})

module.exports = router;