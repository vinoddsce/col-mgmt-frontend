import React, { Component } from 'react';
import { connect } from 'react-redux';

import Student from './Student';

class StudentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log("StudentsList", this.props);
        return (
            <div>
                <h4><span>ID</span><span>Name</span><span>Course</span><span>Fees</span></h4>
                {
                    this.props.students.map((student, index) =>
                        <Student
                            id={student._id}
                            key={student._id}
                            name={student.name}
                            course={student.course}
                            fees={student.fees}
                            isEditing={student.isEditing}
                            index={index}
                            onDelete={() => this.onDelete(student._id)}
                            updateStudent={() => this.updateStudent(index)}
                            onChange={this.handleStudentUpdate}
                        />
                    )
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => (
    {
        students: state.college.students
    }
)

export default connect(mapStateToProps, null)(StudentsList);