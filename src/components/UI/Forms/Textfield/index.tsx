import React, { FC } from "react";

import "./textfield.scss";

type TextfieldProps = {
  label: string;
  type: string;
  error: any;
  register: any;
};

const Textfield: FC<TextfieldProps> = ({ label, type, register, error }) => {
  const capitalize = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  };

  return (
    <div className="textfield">
      <input
        name={label}
        type={type}
        ref={register}
        className={
          error
            ? "textfield__input textfield__input--error"
            : "textfield__input"
        }
        required={true}
      />
      <label htmlFor={label} className="textfield__label">
        {capitalize(label)}
      </label>
      {error && <span className="textfield__error">{error.message}</span>}
    </div>
  );
};

export default Textfield;
