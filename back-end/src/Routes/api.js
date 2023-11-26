const express = require('express');
const router = express.Router();

//importing controller function for all the routing.
const StudentContoller = require("../Controllers/StudentController");

router.post("/create" , StudentContoller.CreateStudent);
router.get("/read" , StudentContoller.ReadStudentData);
router.put("/update/:id" , StudentContoller.UpdateStudentData);
router.delete("/remove/:id" , StudentContoller.RemoveStudentData);




module.exports = router ;