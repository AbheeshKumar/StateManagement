import { useState, createContext, useContext } from "react";

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
);

const AddBtn = () => {
  const [, setCounter] = useContext(CounterContext);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
    </>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <>count: {counter}</>;
};

export default function CounterState() {
  return (
    <CounterContextProvider>
      <AddBtn />
      <Counter />
    </CounterContextProvider>
  );
}
