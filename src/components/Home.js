import React, { Component } from 'react';
import { connect } from 'react-redux';

import Department from './Department';
import Student from './Student';

import './Home.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom';
import StudentsList from './StudentsList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
            console.log("Students: ", s);
            this.props.dispatch({
                type: 'LOAD_STUDENT',
                students: s
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        console.log("Home - render() ", this.props);
        return (
            <div className="jumbotron">
                <h1 className="display-3">College Management</h1>
                <div className="container">
                    <div className="col-md-3">

                        <NavLink style={{ margin: '0px 20px' }} to={`${this.props.match.url}/Department`}>Department</NavLink>
                        <NavLink style={{ margin: '0px 20px' }} to={`${this.props.match.url}/Students`}>Students</NavLink>
                        <NavLink style={{ margin: '0px 20px' }} to={`${this.props.match.url}/Others`}>Others</NavLink>
                        <hr />
                    </div>
                    <div className="col-md-9">
                        <Route path={`${this.props.match.path}/Department`} component={Department} />
                        <Route path={`${this.props.match.path}/Students`} component={StudentsList} />
                        <Route path={`${this.props.match.path}/Others`} render={() => { return <h1>React by Fullstack.io book</h1> }} />

                    </div>
                </div >
            </div >
        );
    }
}

export default connect()(Home);

