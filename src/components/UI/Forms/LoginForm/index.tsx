import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { loginUser } from "../../../../lib/api";
import { AuthContext } from "../../../../context/auth";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import Textfield from "../Textfield";
import Flex from "../../../Flex";
import Button from "../../../Button";

const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  password: yup.string().required()
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    setIsLoading(true);
    loginUser(data).then(response => {
      if (response) {
        succesHandler(response);
      }
    });
  };

  const succesHandler = (response: any) => {
    setIsLoading(false);
    context.login(response.data);
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
        <Button primary isSubmit isLoading={isLoading}>
          Login
        </Button>
      </form>
    </Flex>
  );
};

export default LoginForm;
