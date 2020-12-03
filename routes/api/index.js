const router = require("express").Router();
const picRoutes = require("./posts");

router.use("/posts", picRoutes);

module.exports = router;
