import React, { FC } from "react";

import "./textfield.scss";

type TextfieldProps = {
  label: string;
  type: string;
  error: any;
  register: any;
};

const Textfield: FC<TextfieldProps> = ({ label, type, register, error }) => {
  return (
    <div className="textfield">
      <span>{label}</span>
      <input name={label} type={type} ref={register} />
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default Textfield;
