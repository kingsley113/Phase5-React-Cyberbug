import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageContent from "./containers/pageContent";
import LoginPage from "./containers/pages/loginPage";

class App extends Component {
  render() {
    return (
      // <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          {/* TODO: Rename splash screen to login screen */}
          <Route path="/" component={PageContent} />
          {/* TODO: if localstorage JWT present, redirect to dashbaord, if not, redirect to login */}
          {/* TODO: implement this as a protected route? */}
          <Route path="*">
            {/* TODO: Not found component/page */}
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </Router>
      // TODO: Add logic to determine if user is logged in or not and show splash screen if not
    );
  }
}

export default App;
