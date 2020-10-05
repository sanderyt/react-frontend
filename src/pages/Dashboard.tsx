import React from "react";
import { Route } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import Menu from "../components/Menu";
import Home from "./Dashboard/Home";
import Projects from "./Dashboard/Projects";
import Settings from "./Dashboard/Settings";
import AddProject from "./Dashboard/AddProject";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Menu />
        </Col>
        <Col md={9}>
          <Route path={`/dashboard/home`}>
            <Home />
          </Route>
          <Route path={`/dashboard/projects`} exact>
            <Projects />
          </Route>
          <Route path={`/dashboard/projects/add`} exact>
            <AddProject />
          </Route>
          <Route path={`/dashboard/settings`}>
            <Settings />
          </Route>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
