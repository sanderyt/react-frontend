import { useState } from "react";

const useToaster = () => {
  const [toaster, setToaster] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const toggleToaster = (message: string, type: string) => {
    setMessage(message);
    setToaster(!toaster);
    setType(type);
  };

  return { toaster, toggleToaster, message, type };
};

export default useToaster;
