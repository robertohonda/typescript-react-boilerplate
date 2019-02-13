import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Counter, {ICounterProps} from "../../components/counter";
import { addCounter, decCounter } from "../../store/actions/counter";
import IStore from "../../store/interfaces";

class Home extends PureComponent<ICounterProps> {
  public render() {
    const {addCounter, decCounter, counter} = this.props;

    return (
      <React.Fragment>
        <Counter addCounter={addCounter} decCounter={decCounter} counter={counter}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({counter}: IStore) => ({
  counter,
});

const mapDispatchToProps = {
  addCounter,
  decCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
