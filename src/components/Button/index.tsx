import React, { FC, ReactNode, MouseEvent } from "react";

import "./button.scss";
import Spinner from "../Spinner";

type ButtonProps = {
  children?: ReactNode;
  clickHandler?: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  rounded?: boolean;
  isLoading?: boolean;
  isSubmit?: boolean;
  submitValue?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  clickHandler,
  className,
  primary,
  secondary,
  rounded,
  isLoading,
  isSubmit,
  submitValue
}) => {
  const primaryClass = primary && "btn--primary";
  const secondaryClass = secondary && "btn--secondary";
  const roundedClass = rounded && "btn--rounded";
  const loadingClass = isLoading && "btn--loading";

  const classes = `btn d-flex justify-content-center align-items-center ${className} ${primaryClass} ${secondaryClass} ${roundedClass} ${loadingClass}`;
  return (
    <>
      {isSubmit ? (
        <input
          type="submit"
          className={classes}
          value={isLoading ? "Loading..." : submitValue}
        />
      ) : (
        <button className={classes} onClick={clickHandler} disabled={isLoading}>
          {isLoading ? <Spinner /> : children}
        </button>
      )}
    </>
  );
};

export default Button;
