import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';
import FetchStudentsCountHook from './FetchStudentsCountHook';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div style={{ display: 'inline-block', textAlign: 'right', margin: '0px 0px 0px 50px' }}>
                <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        style={{ width: '25px', marginRight: '5px' }} />
                    Logout
                </a>
            </div>
        )
        const guestLinks = (
            <div style={{ display: 'inline-block', textAlign: 'right', margin: '0px 0px 0px 50px' }}>

                <Link className="label" style={{ margin: '0px 20px' }} to="/register">Sign Up</Link>
                <Link className="label" to="/login">Sign In</Link>
            </div>
        )
        return (
            <div>
                <ThemeContext.Consumer>
                    {
                        theme => {
                            return <LanguageContext.Consumer>
                                {
                                    (language) => {
                                        return <div style={{
                                            background: theme.config.headerBg, color: theme.config.fontColor,
                                            width: theme.config.width, height: theme.config.height
                                        }}>

                                            <span>College Management</span>
                                            {language.labels.langSelectLabel}
                                            <select value={language.name} onChange={(event) => this.props.toggleLanguage(event.currentTarget.value)}>
                                                <option value="en">English</option>
                                                <option value="gr">Germnan</option>
                                                <option value="fr">French</option>
                                                <option value="sp">Spanish</option>
                                                <option value="hn">Hindi</option>
                                            </select>
                                            <span style={{ padding: '0px', margin: '0px 20px' }}>{language.labels.themeSelectLabel}({theme.type})</span>
                                            <input type="checkbox" checked={theme.type === 'light'} onChange={(event) => this.props.toggleTheme(event.currentTarget.value)} />
                                            {isAuthenticated ? authLinks : guestLinks}

                                            {/* <span>Count</span><FetchStudentsCountHook /> */}
                                        </div>
                                    }
                                }
                            </LanguageContext.Consumer>
                        }
                    }
                </ThemeContext.Consumer>
            </div>

        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));