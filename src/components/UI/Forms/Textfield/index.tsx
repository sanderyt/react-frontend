import React, { FC, DetailedHTMLProps } from "react";

import "./textfield.scss";
import { capitalize } from "../../../../lib/util";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type TextfieldProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  type: string;
  error: Error;
  register: () => RefReturn;
};

const Textfield: FC<TextfieldProps> = ({ label, type, register, error }) => {
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
      {error && (
        <span className="textfield__error">{capitalize(error.message)}</span>
      )}
    </div>
  );
};

export default Textfield;
