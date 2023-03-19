import { useReducer } from "react";

type initialStateType = {
  count: number;
};

type reducesActions = {
  type: "INCREASE" | "DECREASE";
};

const initialState: initialStateType = {
  count: 0,
};

const reducer = (state: initialStateType, action: reducesActions) => {
  switch (action.type) {
    case "INCREASE": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREASE": {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Reducer</h2>
      <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
      </div>
    </div>
  );
};

export default Reducer;
