import React, { FC, DetailedHTMLProps } from "react";
import { capitalize } from "../../../../lib/util";

import "./textarea.scss";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type TextareaProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  register: () => RefReturn;
  error: Error;
};

const Textarea: FC<TextareaProps> = ({ label, error, register }) => {
  return (
    <div className="textarea">
      <textarea
        name={label}
        ref={register}
        className={
          error ? "textarea__input textarea__input--error" : "textarea__input"
        }
        required={true}
        rows={10}
      />
      <label htmlFor={label} className="textarea__label">
        {capitalize(label)}
      </label>
      {error && (
        <span className="textarea__error">{capitalize(error.message)}</span>
      )}
    </div>
  );
};

export default Textarea;
