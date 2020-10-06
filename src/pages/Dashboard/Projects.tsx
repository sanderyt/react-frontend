import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Flex from "../../components/Flex";
import { Link } from "react-router-dom";
import Modal from "../../components/UI/Modal";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

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
      <Button variant="primary" onClick={toggleModal}>
        Open modal
      </Button>
      <Modal
        title="This is an modal"
        isOpen={modalOpen}
        clickHandler={toggleModal}
      >
        Een modal
      </Modal>
    </>
  );
};

export default Projects;
