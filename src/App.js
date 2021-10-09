import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./componets/homePage";
import ErrorPage from "./pages/errorPage";
import ProjectsPage from "./pages/projectsPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
