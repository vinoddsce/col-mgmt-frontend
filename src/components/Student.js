import React, { Component } from 'react';
import './Student.css';


class Student extends Component {
    constructor(props) {
        super(props);
        console.log("Student - constructor", props);
        this.state = {
            name: props.name,
            id: props.id,
            course: props.course,
            fees: props.fees
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.name !== prevState.name
            || nextProps.course !== prevState.course
            || nextProps.fees !== prevState.fees
            || nextProps.isEditing !== prevState.isEditing) {
            console.log("Update Student");
            return {
                ...nextProps
            }
        }
        console.log("Should Not Update Student");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.name === this.props.name
            && nextState.fees === this.props.fees
            && nextState.course === this.props.course
            && nextState.isEditing === this.props.isEditing) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log("Student -> getSnapshotBeforeUpdate", prevProps, prevState);
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        // if (prevProps.list.length < this.props.list.length) {
        //     const list = this.listRef.current;
        //     return list.scrollHeight - list.scrollTop;
        // }
        // return null;
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Student -> componentDidUpdate", prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log("Student -> componentWillUnmount");
    }

    render() {
        console.log("Student - render()", this.props.isEditing);

        if (this.props.id === 2) {
            return new Error("Error Ocuured");
        }

        return (
            <>
                {
                    this.props.isEditing ?
                        <h6>
                            <input
                                type="text"
                                name="name"
                                value={this.props.name}
                                onChange={event => this.props.onChange(event, this.props.index)}
                                required
                            />

                            <select name="course" type="text" value={this.props.course} onChange={event => this.props.onChange(event, this.props.index)} required>
                                <option value="science">Science</option>
                                <option value="commerce">Commerce</option>
                                <option value="arts">Arts</option>
                            </select>
                            {/* <input
                                type="text"
                                name="course"
                                value={this.props.course}
                                onChange={event => this.props.onChange(event, this.props.index)}
                                required
                            /> */}

                            <input
                                type="text"
                                name="fees"
                                value={this.props.fees}
                                onChange={event => this.props.onChange(event, this.props.index)}
                                required
                            />

                            <button className="btn btn-primary" name="Update" value="Update" onClick={this.props.updateStudent}>Save</button>
                            <button className="btn btn-danger" name="Delete" value="Delete" onClick={this.deleteStudent}>X</button>
                        </h6>
                        :
                        <h6>
                            <span>{this.props.id}</span>
                            <span>{this.state.name}</span>
                            <span>{this.state.course}</span>
                            <span>{this.state.fees}</span>

                            <button className="btn btn-primary" name="Update" value="Update" onClick={this.props.updateStudent}>Edit</button>
                            <button className="btn btn-danger" name="Delete" value="Delete" onClick={this.props.onDelete}>X</button>
                        </h6>

                }
            </>
        );
    }
}
export default Student;


