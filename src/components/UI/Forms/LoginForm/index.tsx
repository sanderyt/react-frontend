import React from "react";

import { useForm } from "react-hook-form";
import { loginUser } from "../../../../lib/api";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import Textfield from "../Textfield";
import Flex from "../../../Flex";
import { Button } from "react-bootstrap";

const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  password: yup.string().required()
});

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    loginUser(data).then(response => {
      //set the token here in context response.data
    });
  };

  return (
    <Flex container flexDirection="column" alignItems="center">
      <h3>Login</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <Textfield
          label="email"
          type="text"
          register={register}
          error={errors.email}
        />
        <Textfield
          label="password"
          type="password"
          register={register}
          error={errors.password}
        />
        <Button type="submit">Login</Button>
      </form>
    </Flex>
  );
};

export default LoginForm;
