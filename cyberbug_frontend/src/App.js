import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageContent from "./containers/pageContent";
import LoginPage from "./containers/pages/loginPage";
import NewUserPage from "./containers/pages/newUserPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={NewUserPage} />
          <Route path="/" component={PageContent} />
          {/* TODO: if localstorage JWT present, redirect to dashbaord, if not, redirect to login */}
          {/* TODO: implement this as a protected route? */}
          <Route path="*">
            {/* TODO: Not found component/page */}
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
