import { addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_pt from "react-intl/locale-data/pt";
import EnglishMessages from "../en";
import PortugueseMessages from "../pt";

addLocaleData([...locale_en, ...locale_pt]);

export const defaultLanguage = "en";

export const messages: {[key: string]: any} = {
  en: EnglishMessages,
  pt: PortugueseMessages,
};

const navigatorLanguage = navigator.language.split(/[-_]/)[0];

export const language = messages[navigatorLanguage]
  ? navigatorLanguage
  : defaultLanguage;
