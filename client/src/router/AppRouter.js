import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import App from "../components/App";
import Header from "../components/Header";
import FilesList from "../components/FilesList";

const AppRouter = () => (
  <Router>
    <div className="container">
      <Header />
      <div className="main-content">
        <App />

        <Switch>
          <Route component={<FilesList />} path="/list" />
        </Switch>
      </div>
    </div>
  </Router>
);

export default AppRouter;
