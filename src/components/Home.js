import React, { Component } from 'react';

import Department from './Department';
import Student from './Student';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        }
        this.updateStudent = this.updateStudent.bind(this);
        this.addingNewStudent = this.addingNewStudent.bind(this)
        this.handleStudentUpdate = this.handleStudentUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    addingNewStudent(name, course, fees) {
        console.log("App->addingNewStudent()");
        const studentsInState = this.state.students;
        const studentsArrayLength = studentsInState.length;
        console.log("studentsArrayLength", studentsArrayLength);
        const id = studentsArrayLength ? (studentsInState[studentsArrayLength - 1].id + 1) : 1;
        let isEditing = false;
        this.setState({
            students: [
                ...studentsInState,
                Object.assign({}, {
                    id,
                    name,
                    course,
                    fees,
                    isEditing
                })
            ]
        })
    }

    updateStudent(index) {
        console.log("App->updateStudent()", index);
        this.setState({
            students: this.state.students.map((student, itemIndex) => {
                if (itemIndex === index) {
                    console.log("App->updateStudent()", student);
                    return {
                        ...student, isEditing: !student.isEditing
                    }
                }
                return student;
            })
        });
    }

    onDelete = index => {
        this.setState({
            students: [
                ...this.state.students.slice(0, index),
                ...this.state.students.slice(index + 1)
            ]
        });
    };

    handleStudentUpdate = (event, index) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            students: this.state.students.map((student, itemIndex) => {
                if (itemIndex === index) {
                    return {
                        ...student,
                        [name]: value
                    }
                }
                return student;
            })
        });
    };
    componentDidCatch(error, info) {
        console.log("App - componentDidCatch() ", error, info);
    }


    componentDidMount() {
        fetch('http://localhost:8000/students', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
        }).then(res => res.json()).then(s => {
            // console.log("Students", s);
            this.setState({
                students: s
            })
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        console.log("App - render() ", this.state.students.length);
        return (
            <>
                <Department name="Science"
                    onStudentAdd={this.addingNewStudent} />
                <hr />
                <h2>Student Details</h2>
                <h4><span>ID</span><span>Name</span><span>Course</span><span>Fees</span></h4>
                {
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
                }
            </>
        );
    }
}