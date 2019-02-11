
import { SET_LANGUAGE } from "../types";

export const setLanguage = (language: string) => ({
    payload: language,
    type: SET_LANGUAGE,
  });
