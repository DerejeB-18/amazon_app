import React, { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

// Create Context
export const StateContext = createContext();

// Provider Component
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

