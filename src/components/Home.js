import React, { Component } from 'react';

import Department from './Department';
import Student from './Student';

export default class Home extends Component {
    render() {
        return (
            <>
                <Department name="Science" />
                <hr />
                <h2>Student Details</h2>
                <h4><span>ID</span><span>Name</span><span>Course</span><span>Fees</span></h4>
                {/* {
                    this.state.students.map((student, index) =>
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
                } */}
            </>
        );
    }
}