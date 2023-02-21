import React from 'react';
import { useStateContext } from '../context';

const ChildDisplay = () => {
  const state = useStateContext();

  console.log('ChildDisplay run...');

  return <div>
      <h3>The current State:</h3>
      <p>Name: <strong>{state.name}</strong></p>
      <p>Age: <strong>{state.age}</strong></p>
    </div>
};

export default ChildDisplay;
