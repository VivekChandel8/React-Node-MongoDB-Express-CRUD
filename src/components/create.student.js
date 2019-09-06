import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentAddress = this.onChangeStudentAddress.bind(this);
    this.onChangeStudentNumber = this.onChangeStudentNumber.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      student_name: '',
      student_address: '',
      student_phno: '',
      student_email: ''
    }
  }
  onChangeStudentName(e) {
    this.setState({
      student_name: e.target.value
    });
  }
  onChangeStudentAddress(e) {
    this.setState({
     student_address: e.target.value
    })  
  }
  onChangeStudentNumber(e) {
    this.setState({
        student_phno: e.target.value
    })
  }
  onChangeStudentEmail(e) {
    this.setState({
        student_email:  e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        student_name: this.state.student_name,
        student_address: this.state.student_address,
        student_phno: this.state.student_phno,
        student_email: this.state.student_email
    };
    axios.post('http://localhost:4000/student/add', obj)
        .then(res => console.log(res.data));
    console.log(obj)
    this.setState({
        student_name: '',
        student_address: '',
        student_phno: '',
        student_email: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.student_name}
                      onChange={this.onChangeStudentName}
                      />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.student_address}
                      onChange={this.onChangeStudentAddress}
                      />
                </div>
                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.student_phno}
                      onChange={this.onChangeStudentNumber}
                      />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.student_email}
                      onChange={this.onChangeStudentEmail}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Add Student" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}