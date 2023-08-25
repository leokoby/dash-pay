import React, { createContext, useState, ReactNode, useEffect } from "react";

export const contextComponent = createContext(null);

type ContextProps = {
  children: ReactNode;
};

export default function AppContext({ children }: ContextProps) {
  const [bills, setBills] = useState([]);
  const [objectives, setObjectives] = useState([]);
  const billOnLocal = localStorage.getItem("Bills");
  const objectiveOnLocal = localStorage.getItem("Objectives");
  const billParse = JSON.parse(billOnLocal);
  const objectiveParse = JSON.parse(objectiveOnLocal);

  useEffect(() => {
    if (billOnLocal?.length) {
      setBills(billParse);  
    }
    if (objectiveOnLocal?.length) {
      setObjectives(objectiveParse);
    }
  }, []);

  return (
    <contextComponent.Provider
      value={{ bills, setBills, objectives, setObjectives }}
    >
      {children}
    </contextComponent.Provider>
  );
}
