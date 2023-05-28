import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;

    case "minus":
      return state - 1;

    default:
      return state;
  }
};

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useReducer(reducer, 0)}>
    {children}
  </CounterContext.Provider>
);

const AddBtn = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
    </>
  );
};
const SubBtn = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <>
      <button onClick={() => dispatch({ type: "minus" })}>Subtract</button>
    </>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <>count: {counter}</>;
};

export default function CounterReducerState() {
  return (
    <CounterContextProvider>
      <AddBtn />
      <Counter />
      <SubBtn />
    </CounterContextProvider>
  );
}
