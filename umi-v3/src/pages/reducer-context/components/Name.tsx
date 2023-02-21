import React from 'react';
import { useDispatchContext } from '../context';

const Name = () => {
  console.log('Name run...');
  const dispatch = useDispatchContext();

  const changeName = () => {
    dispatch({
      type: 'UPDATE',
      payload: {
        name: Math.random().toString(36).slice(-6)
      }
    });
  };

  return <button onClick={changeName}>Change name</button>
};

export default Name;
