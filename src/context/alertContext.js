import { createContext, useContext, useMemo, useState } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: "success",
    // Message to be displayed, can be any string
    message: "",
  });

  const value = useMemo(
    () => ({
      ...state,
      onOpen: (type, message) => setState({ isOpen: true, type, message }),
      onClose: () => setState({ isOpen: false, type: "", message: "" }),
    }),
    [state]
  );

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
