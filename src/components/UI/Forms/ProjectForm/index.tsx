import React from "react";
import { useForm } from "react-hook-form";
import { postProject } from "../../../../lib/api";
import { Project } from "../../../../types/types";

import Textfield from "../Textfield";
import Button from "../../../Button";
import Textarea from "../Textarea";
import Flex from "../../../Flex";
import Fileinput from "../Fileinput";

const ProjectForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: Project) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("tools", data.tools);
    formData.append("url", data.url);

    Array.from(data.images).map(image => {
      formData.append("images", image);
    });

    postProject(
      formData,
      (response: any) => {
        console.log("response", response);
      },
      (error: any) => {
        console.error(error, "error");
      }
    );
  };

  const watchFiles = watch("images");

  return (
    <Flex container flexDirection="column" alignItems="center">
      <h1>Add a new project</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Textfield
          label="title"
          type="text"
          register={register}
          error={errors.title}
        />
        <Textarea
          label="description"
          register={register}
          error={errors.description}
        />
        <Textfield
          label="tools"
          type="text"
          register={register}
          error={errors.tools}
        />
        <Textfield
          label="url"
          type="text"
          register={register}
          error={errors.url}
        />
        <Fileinput name="images" register={register} files={watchFiles} />
        <Button isSubmit primary submitValue="Post new project" />
      </form>
    </Flex>
  );
};

export default ProjectForm;
