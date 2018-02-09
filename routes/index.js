const express = require("express");
const task = require("../controllers/taskController");
const router = express.Router();

router.get("task", task.getAll);
router.post("task", task.create);
router.put("task", task.update);
router.delete("task", task.delete);

module.exports = router;