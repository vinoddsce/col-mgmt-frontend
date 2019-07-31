import React, { Component } from 'react';
import './Department.css';
import 'bootstrap/dist/css/bootstrap.css';

class Department extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Addning New Student: ", event.target.stdName.value,
            event.target.stdCourse.value, event.target.stdFees.value)
        // var data = {
        //     name: 
        // }

        // this.props.onStudentAdd(event.target.stdName.value,
        //     event.target.stdCourse.value, event.target.stdFees.value);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Add Student Form</h2>
                <div className="row justify-content-md-center">
                    <div className="col-md-6 col-md-offset-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input name="stdName" key="stdName" type="text" className="form-control"
                                    onChange={this.handleChange} defaultValue=""></input>
                            </div>


                            <div className="form-group">
                                <label>Course:</label>
                                <select name="stdCourse" type="text" className="form-control" >
                                    <option value="science">Science</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="arts">Arts</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Fees:</label>
                                <input type="text" name="stdFees" key="stdFees" className="form-control" onChange={this.handleChange} defaultValue=""></input>
                            </div>
                            <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Department;