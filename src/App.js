import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import ThemeContext from './context/ThemeContext';
import LanguageContext from './context/LanguageContext';
import { labels } from './context/LanguageContext';
import { themeConfig } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrivateRoute } from './components/PrivateRoute';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      language: 'en',
      theme: 'light'
    }
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleLanguage(newLang) {
    this.setState({
      language: newLang
    });
  }
  toggleTheme(newTheme) {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <ThemeContext.Provider value={{ type: this.state.theme, config: themeConfig[this.state.theme] }}>
              <LanguageContext.Provider value={{ name: this.state.language, labels: labels[this.state.language] }}>
                <Navbar toggleLanguage={this.toggleLanguage} toggleTheme={this.toggleTheme} />
              </LanguageContext.Provider>
            </ThemeContext.Provider>

            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
