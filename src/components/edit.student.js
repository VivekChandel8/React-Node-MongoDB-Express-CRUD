import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {
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

  componentDidMount() {
      axios.get('http://localhost:4000/student/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                student_name: response.data.student_name, 
                student_address: response.data.student_address,
                student_phno: response.data.student_phno,
                student_email: response.data.student_email
            });
          })
          .catch(function (error) {
              console.log(error);
          })
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
        student_name: this.student_name,
        student_address: this.student_address,
        student_phno: this.student_phno,
        student_email: this.student_email
    };
    console.log(obj)
    axios.post('http://localhost:4000/student/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Student</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Student's Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.student_name}
                      onChange={this.onChangeStudentName}
                      />
                </div>
                <div className="form-group">
                    <label>Student's Address</label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.student_address}
                      onChange={this.onChangeStudentAddress}
                      />
                </div>
                <div className="form-group">
                    <label>Student's Phone  Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.student_phno}
                      onChange={this.onChangeStudentNumber}
                      />
                </div>
                <div className="form-group">
                    <label>Student's Email </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.student_email}
                      onChange={this.onChangeStudentEmail}
                      />
                </div>
                
                <div className="form-group">
                      <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
                
            </form>
        </div>
    )
  }
}