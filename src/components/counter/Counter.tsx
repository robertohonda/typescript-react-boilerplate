import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addCounter, decCounter } from "../../store/actions/counter/counter";

interface IProps {
  counter: number;
  addCounter: () => void;
  decCounter: () => void;
}

class Counter extends Component<IProps> {
  public render() {
    const { counter, addCounter: add, decCounter: dec } = this.props;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={add}>ADD</button>
        <button onClick={dec}>DEC</button>
      </div>
    );
  }
}

const mapStateToProps = ({ counter }: { counter: number }) => ({
  counter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCounter: () => dispatch(addCounter()),
  decCounter: () => dispatch(decCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
