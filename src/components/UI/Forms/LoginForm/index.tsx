import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { loginUser } from "../../../../lib/api";
import { AuthContext } from "../../../../context/auth";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import Textfield from "../Textfield";
import Flex from "../../../Flex";
import Button from "../../../Button";
import { ToasterContext } from "../../../../context/toaster";

const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  password: yup.string().required()
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const { toggleToaster } = useContext(ToasterContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    setIsLoading(true);
    loginUser(
      data,
      (response: Object) => succesHandler(response),
      (error: Object) => {
        errorHandler(error);
      }
    );
  };

  const succesHandler = (response: any) => {
    setIsLoading(false);
    login(response.data);
    toggleToaster!("Successfully logged in", "success");
  };

  const errorHandler = (error: any) => {
    setIsLoading(false);
    toggleToaster!(error.response.data, "error");
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
        <Button primary isSubmit isLoading={isLoading} submitValue="Login" />
      </form>
    </Flex>
  );
};

export default LoginForm;
