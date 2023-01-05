const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsContrllers");

router.get("/", newsController.index);
module.exports = router;
