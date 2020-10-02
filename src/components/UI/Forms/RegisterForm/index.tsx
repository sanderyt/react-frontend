import React, { useState } from "react";
import { registerUser } from "../../../../lib/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import { Alert, Button } from "react-bootstrap";
import Textfield from "../Textfield";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords does not match")
});

const RegisterForm = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    const response = registerUser(data);
    if (response) {
      successHandler();
    }
  };

  const successHandler = () => {
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
      <Textfield
        label="name"
        type="text"
        register={register}
        error={errors.name}
      />
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
      <Textfield
        label="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword}
      />
      <Button type="submit">Register</Button>
      <Alert variant="success" show={success}>
        You have successfully signed up!
      </Alert>
    </form>
  );
};

export default RegisterForm;
