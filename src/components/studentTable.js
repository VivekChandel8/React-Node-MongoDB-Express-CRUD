import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class StudentTable extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/student/delete/'+this.props.obj._id).then(console.log(this.props.obj._id))
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.student_name}
          </td>
          <td>
            {this.props.obj.student_address}
          </td>
          <td>
            {this.props.obj.student_phno}
          </td>
          <td>
            {this.props.obj.student_email}
          </td>
          <td>
            <Link to={"/student/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default StudentTable;