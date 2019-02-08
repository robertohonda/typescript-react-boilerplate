import { IAction } from "../../../core/store/action/IAction";
import { ADD_COUNTER, DEC_COUNTER } from "../../actions/types";

const initialState = 0;

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_COUNTER:
      return state + 1;
    case DEC_COUNTER:
      return state - 1;
    default:
      return state;
  }
};
