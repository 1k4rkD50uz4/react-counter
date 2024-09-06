import { useState } from 'react';

const Counter = () => {
  let [count,setCount] = useState(1000);
  const increment = () => setCount(count+2);
      return (
      <div className={'container'}>
          <h1 className={'item'}>Counter App</h1>
          <label className={'item'}>Count: {count}</label>
          <button className={'item'} onClick={increment}>Increment</button>
      </div>
    );
}

export default Counter;
