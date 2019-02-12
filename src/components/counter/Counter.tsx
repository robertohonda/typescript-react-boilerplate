import React from "react";
import {connect} from "react-redux";
import {addCounter, decCounter} from "../../store/actions/counter/counter";
import IStore from "../../store/interfaces";

export interface ICounterProps {
  counter: number;
  addCounter: () => void;
  decCounter: () => void;
}

const Counter: React.SFC<ICounterProps> = ({counter, addCounter: add, decCounter: dec}) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={add}>ADD</button>
    <button onClick={dec}>DEC</button>
  </div>
);

const mapStateToProps = ({counter}: IStore) => ({
  counter,
});

const mapDispatchToProps = {
  addCounter,
  decCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
