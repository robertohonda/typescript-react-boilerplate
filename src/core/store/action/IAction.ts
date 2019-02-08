import { Dispatch } from "redux";

export type IMapDispatchToProps = (dispatch: Dispatch) => void;

export interface IAction {
  type: string;
}
