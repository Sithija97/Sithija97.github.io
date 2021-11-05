import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/contact";
import HomePage from "./pages/homePage";
import Menu from "./componets/menu";
import ErrorPage from "./pages/errorPage";
import ProjectsPage from "./pages/projectsPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Menu />
        <Switch>
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/contact-me" exact component={Contact} />
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
