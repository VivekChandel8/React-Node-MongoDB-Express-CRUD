// student.route.js

const express = require('express');
const studentRoutes = express.Router();

// Require student model in our routes module
let Student = require('./student.model');

// Defined store route
studentRoutes.route('/add').post(function (req, res) {
  console.log('working!!')
  console.log(req.body)
  let student= new Student(req.body);
  student.save()
    .then(student => {
      res.status(200).json({'Student': 'Student in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
studentRoutes.route('/').get(function (req, res) {
    Student.find(function(err, Student){
    if(err){
      console.log(err);
    }
    else {
      res.json(Student);
    }
  });
});

// Defined edit route
studentRoutes.route('/edit/:id').get(function (req, res) {
  console.log("EditWorking")
  let id = req.params.id;
  console.log(req.params.id);
  Student.findById(id, function (err, student){
    console.log(student)
      res.json(student);
  });
});

//  Defined update route
studentRoutes.route('/update/:id').post(function (req, res) {
    console.log(req.param.id)
    Student.findById(req.params.id, function(err, student) {
    if (!student)
      res.status(404).send("data is not found");
    else {
        Student.person_name = req.body.person_name;
        Student.business_name = req.body.business_name;
        Student.business_gst_number = req.body.business_gst_number;

        Student.save().then( student => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
studentRoutes.route('/delete/:id').get(function (req, res) {
    Student.findByIdAndRemove({_id: req.params.id}, function(err, student){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = studentRoutes;
