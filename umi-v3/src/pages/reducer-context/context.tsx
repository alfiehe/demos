import React from 'react';

interface IState {
  name: string;
  age: number;
}

interface IAction {
  type: string;
  payload?: Partial<IState>;
}

const initState: IState = {
  name: 'DaiBoy',
  age: 18,
};

// 定义Reducer方法
const reducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE': {
      return { ...state, ...payload };
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}

const ContextProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

const StateContext = React.createContext<IState>(initState);
const DispatchContext = React.createContext<React.Dispatch<IAction>>(() => {});

function useStateContext() {
  const context = React.useContext(StateContext);
  if (!context) {
    throw new Error(`context must be used within a Provider`);
  }
  return context;
};

function useDispatchContext() {
  const context = React.useContext(DispatchContext);
  if (!context) {
    throw new Error(`context must be used within a Provider`);
  }
  return context;
};

export {
  ContextProvider,
  useStateContext,
  useDispatchContext,
};
