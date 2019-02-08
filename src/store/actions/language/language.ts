
import { Dispatch } from "redux";
import { IMapDispatchToProps } from "../../../core/store/action/IAction";
import { SET_LANGUAGE } from "../types";

export const setLanguage = (language: string): IMapDispatchToProps => (dispatch: Dispatch): void => {
  dispatch({
    payload: language,
    type: SET_LANGUAGE,
  });
};
