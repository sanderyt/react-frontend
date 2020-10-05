import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../components/UI/Forms/LoginForm";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
