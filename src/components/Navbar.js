import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px' }} />
                    Logout
                </a>
            </ul>
        )
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Sign In</Link>
                </li>
            </ul>
        )
        return (
            <nav>

                <ThemeContext.Consumer>
                    {
                        theme => {
                            return <LanguageContext.Consumer>
                                {
                                    (language) => {
                                        return <div style={{
                                            background: theme.config.headerBg, color: theme.config.fontColor,
                                            width: theme.config.width, height: theme.config.height, display: theme.config.display
                                        }}>
                                            <Link className="navbar-brand" to="/">Redux Node Auth</Link>
                                            <div className="language-selector">
                                                {language.labels.langSelectLabel}
                                                <select value={language.name} onChange={(event) => this.props.toggleLanguage(event.currentTarget.value)}>
                                                    <option value="en">English</option>
                                                    <option value="gr">Germnan</option>
                                                    <option value="fr">French</option>
                                                    <option value="sp">Spanish</option>
                                                    <option value="hn">Hindi</option>
                                                </select>
                                            </div>
                                            <div className="theme-selector">
                                                <span className="label">{language.labels.themeSelectLabel}({theme.type})</span>
                                                <label className="switch">
                                                    <input type="checkbox" checked={theme.type === 'light'} onChange={(event) => this.props.toggleTheme(event.currentTarget.value)} />
                                                    <span className="slider round"></span>
                                                </label>
                                                <div>
                                                    {isAuthenticated ? authLinks : guestLinks}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                }
                            </LanguageContext.Consumer>
                        }
                    }
                </ThemeContext.Consumer>

            </nav>
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