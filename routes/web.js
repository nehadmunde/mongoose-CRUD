const express=require('express');
const router=express.Router();
const StudentController=require('../controllers/studentController');

router.get('/',StudentController.getAllDoc)//route for get doc

router.post('/',StudentController.createDoc) //route for create doc

router.get('/edit/:id',StudentController.editDoc)

router.post('/update/:id',StudentController.updateDocById)

router.post('/delete/:id',StudentController.deleteDocById)

module.exports=router;