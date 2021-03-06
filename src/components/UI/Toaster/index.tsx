import React, { useEffect, useContext } from "react";
import { ToasterContext } from "../../../context/toaster";
import { FaTimes } from "react-icons/fa";

import "./toaster.scss";

const Toaster = () => {
  const { toaster, toggleToaster, message, type } = useContext(ToasterContext);
  useEffect(() => {
    if (toaster) setTimeout(() => toggleToaster!("", type || ""), 5000);
  }, [toaster]);

  const successClass = type === "success" && "toaster--success";
  const errorClass = type === "error" && "toaster--error";

  const classes = `toaster d-flex ${successClass} ${errorClass}`;

  return (
    <div className={toaster ? `${classes} actived` : `${classes}`}>
      <div
        className="toaster__close"
        onClick={() => toggleToaster!("", type || "")}
      >
        <FaTimes />
      </div>
      <div className="toaster__content d-flex justify-content-center align-items-center">
        {message}
      </div>
    </div>
  );
};

export default Toaster;
