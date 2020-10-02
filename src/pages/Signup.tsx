import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "../components/UI/Forms/RegisterForm";

const Signup = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Register now!</h2>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
