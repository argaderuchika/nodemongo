const express = require('express')
const router = express.Router()
const student = require('./models/student')
const controller = require('./controller')



router.post('/', (req, res) => {
    const student = req.body;
    console.log(student);
    res.send(controller.addStudent(student));
}); 
//router.post('/',controller.addStudent); 
//router.patch('/',controller.update);
router.delete('/',controller.delete); 








router.get('/', async(req,res) =>{
    try{
         const students = await student.find()
         res.json(students)
    }catch(err){
         res.send('Error')
    }
 })
 router.get('/:id', async(req,res) =>{
     try{
          const student = await student.findById(req.params.id)
          res.json(student)
     }catch(err){
          res.send('Error')
     }
  })







// router.post('/', async(req,res) => {
    
//     const student = new Student({
//         name: req.body.name,
//         class: req.body.class,
//         status: req.body.status
//     })
//     try{
//         const s1 = await student.save()
//         res.json(s1)
//     }catch(err){h
//         res.send('Error')
//     }
// })

router.patch('/:id', async(req,res) => {
    try{
        const student = await Student.findById(req.params.id)
        student.class = req.body.class
        const s1 = await student.save()
        res.json(s1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const student = await Student.findById(req.params.id)
        student.class = req.body.class
        const s1 = await student.remove()
        res.json(s1)
    }catch(err){
        res.send('Error')
    }
})
router.get('/', async(req,res) =>{
    try{
         const students = await Student.find()
         res.json(students)
    }catch(err){
         res.send('Error')
    }
 })
 router.get('/:id', async(req,res) =>{
     try{
          const student = await Student.findById(req.params.id)
          res.json(student)
     }catch(err){
          res.send('Error')
     }
  })
module.exports = router