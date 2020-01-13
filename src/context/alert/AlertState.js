import React, { useReducer } from "react";
//not writing anything in app.js
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";
//creating inintal state and includes all the actions
const AlertState = props => {
  const initialState = null;
  //inorder to dispatch actions to reducer
  //dispatch a type back to reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  //set alert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };
  //returning the provider
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
