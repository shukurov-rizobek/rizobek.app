import React from "react";
import Styles from "./input.module.css";

function Input({ label, state, setState, error }) {
  return (
    <input
      type="text"
      placeholder={label}
      value={state}
      onChange={(e) => setState(e.target.value)}
      className={Styles.input}
      style={error ? { borderColor: "red" } : null}
    />
  );
}

export default Input;
