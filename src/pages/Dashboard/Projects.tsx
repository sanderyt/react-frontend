import React from "react";
import { Button } from "react-bootstrap";
import Flex from "../../components/Flex";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Flex container justifyContent="flex-end">
        <Link to="/dashboard/projects/add">
          <Button variant="primary">Add new project</Button>
        </Link>
      </Flex>
      <Flex container>
        <h3>My current projects</h3>
      </Flex>
    </>
  );
};

export default Projects;
