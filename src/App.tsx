import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/UI/Layout";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <PublicRoute exact path="/">
            <Home />
          </PublicRoute>
          <PublicRoute exact path="/signup">
            <Signup />
          </PublicRoute>
          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
