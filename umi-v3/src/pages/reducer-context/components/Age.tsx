import React from 'react';
import { useDispatchContext } from '../context';

const Age = () => {
  console.log('Age run...');
  const dispatch = useDispatchContext();

  const changeAge = () => {
    dispatch({
      type: 'UPDATE',
      payload: {
        age: Math.floor(Math.random() * 100)
      }
    });
  };

  return <button onClick={changeAge}>Change age</button>;
};

export default Age;
