import React, { FC, DetailedHTMLProps } from "react";

import "./fileinput.scss";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type FileinputProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  register: () => RefReturn;
};

const Fileinput: FC<FileinputProps> = ({ name, register }) => {
  return (
    <div className="fileinput my-4">
      <input type="file" name={name} ref={register} />
    </div>
  );
};

export default Fileinput;
