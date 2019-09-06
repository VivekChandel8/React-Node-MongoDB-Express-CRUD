const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for student
let Student = new Schema({
  student_name: {
    type: String
  },
  student_address: {
    type: String
  },
  student_phno: {
    type: String
  },
  student_email: {
    type: String
  }
},{
    collection: 'Student'
});

module.exports = mongoose.model('Student', Student );