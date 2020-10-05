import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Flex from "../components/Flex";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Flex container flexDirection="column" alignItems="center">
            <h3>Welcome to my CRUD app</h3>
            <h5>built with Typescript, React, Express and MongoDB</h5>
          </Flex>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
