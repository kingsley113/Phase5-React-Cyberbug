import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageContent from "./containers/pageContent";
import LoginPage from "./containers/pages/loginPage";
import NewUserPage from "./containers/pages/newUserPage";
import PageNotFound from "./containers/pages/pageNotFound";
import PageBackground from "./components/pageBackground";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={NewUserPage} />
            <Route path="/" component={PageContent} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
        <PageBackground />
      </div>
    );
  }
}

export default App;
