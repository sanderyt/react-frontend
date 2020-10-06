import React from "react";
import { useForm } from "react-hook-form";

import Flex from "../../components/Flex";
import Textfield from "../../components/UI/Forms/Textfield";
import Button from "../../components/Button";

type ProjectInput = {
  example: string;
  exampleRequired: string;
};

const AddProject = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: ProjectInput) => console.log(data);

  return (
    <Flex container alignItems="center" flexDirection="column">
      <h2>Add a new project</h2>
      <Textfield
        label="title"
        type="text"
        register={register}
        error={errors.title}
      />
      <Textfield
        label="url"
        type="text"
        register={register}
        error={errors.url}
      />
      <span>Description textarea hier</span>
      <Textfield
        label="tools"
        type="text"
        register={register}
        error={errors.tools}
      />
      <span>Images uploaden</span>
      <Button isSubmit primary submitValue="Post new project" />
    </Flex>
  );
};

export default AddProject;
