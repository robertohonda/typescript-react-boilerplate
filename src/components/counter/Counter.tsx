import React from "react";
import Button from "../button/Button";

export interface ICounterProps {
  counter: number;
  addCounter: () => void;
  decCounter: () => void;
}

const Counter: React.SFC<ICounterProps> = ({counter, addCounter, decCounter}) => (
  <div>
    <h1>{counter}</h1>
    <Button onClick={addCounter} color="primary" variant="contained">ADD</Button>
    <Button onClick={decCounter} color="primary" variant="contained">DEC</Button>
  </div>
);

export default Counter;
