const Student = require('./models/student')

exports.addStudent = (req,res) =>{
    let student = new Student(req.body);
    if(!student){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
   

    student.save(function(err){
        if(err){
            res.send(err)
        }
        res.send('Student Created')
    })
}

exports.find = (req, res)=>{

    try{
        const students =  Student.find()
        res.json(students)
   }catch(err){
        res.send('Error')
   }

    
}


exports.delete = (req, res)=>{
    try{
        const student =  Student.findById(req.params.id)
        student.class = req.body.class
        const s1 =  student.remove()
        res.json(s1)
    }catch(err){
        res.send('Error')
    }
}
