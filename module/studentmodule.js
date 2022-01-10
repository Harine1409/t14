const mysql=require('../shared/connect');

exports.getStudent = async (req,res,next) =>
 {
    mysql.connection.query("Select * from studentdata", (err, result)=> 
    {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}
exports.assignStudent = async (req,res,next)=> {
    const query=`UPDATE student SET mentorid = ${req.body.mentorid} WHERE id in (${req.body.studentid},${req.body.studentid});`
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        result=`select * from studentdata where mentorid IS NULL`
        mysql.connection.query(result, (err, result1) => {
            if(err) res.status(500).send({msg:err})
        res.send(result1)
    })
    })
}

exports.changeMentor = async (req,res,next)=> {
    const query = `UPDATE student SET mentorid = ${req.body.mentorid} WHERE id=${req.body.studentid}`
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}

exports.list = async (req,res,next)=> {
   const query =`select* from student s inner join mentor m on s.mentorid=m.mentorid`
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}

