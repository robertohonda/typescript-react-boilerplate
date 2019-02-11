// import { language } from "../../../translations/config";
import {SET_LANGUAGE} from "../../actions/types";

const initialState = "pt";

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};
