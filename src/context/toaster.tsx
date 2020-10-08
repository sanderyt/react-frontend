import React, { createContext, FC } from "react";
import useToaster from "../hooks/useToaster";
import Toaster from "../components/UI/Toaster";

type ToasterContextProps = {
  toaster: boolean;
  toggleToaster: (message: string, type: string) => void;
  message: string;
  type: string;
};

const ToasterContext = createContext<Partial<ToasterContextProps>>({});

const ToasterProvider: FC = ({ children }) => {
  const { toaster, toggleToaster, message, type } = useToaster();
  return (
    <ToasterContext.Provider value={{ toaster, toggleToaster, message, type }}>
      <Toaster />
      {children}
    </ToasterContext.Provider>
  );
};

export { ToasterContext, ToasterProvider };
