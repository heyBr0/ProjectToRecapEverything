import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

interface RootState {
  counter: {
    count: number;
  };
}

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset())
  }

  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input type="number" value={incrementAmount}
        onChange={(e)=> setIncrementAmount(+e.target.value)} />
        <div>
            <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add amount</button>
            <button onClick={resetAll}>Reset</button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
