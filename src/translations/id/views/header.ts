import { parseIds } from "../../helpers";

export interface IHeaderMessageID {
  search: string;
  title: string;
}

const ids = {
  _path: ["header"],
  search: "search",
  title: "title",
};

export default parseIds(ids);
