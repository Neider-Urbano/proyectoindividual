const { Router } = require('express');
const dogsRouter=require("./dogs")
const temperamentsRouter=require("./temperaments")
const router = Router();

router.use("/dogs", dogsRouter)
router.use("/temperaments", temperamentsRouter)


module.exports = router;
