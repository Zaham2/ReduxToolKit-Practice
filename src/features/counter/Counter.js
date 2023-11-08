import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = React.useState('2');

  const addValue = +incrementAmount || 0;

  const resetAll = () => {
    dispatch(reset());
    setIncrementAmount(0);
  }

  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <div>Count: {count}</div>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <input type='text' value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
}
