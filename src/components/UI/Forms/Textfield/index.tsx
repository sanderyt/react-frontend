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
      <input
        name={label}
        type={type}
        ref={register}
        className="textfield__input"
        required={true}
      />
      <label htmlFor={label} className="textfield__label">
        {label}
      </label>
      {error && <span className="textfield__error">{error.message}</span>}
    </div>
  );
};

export default Textfield;
