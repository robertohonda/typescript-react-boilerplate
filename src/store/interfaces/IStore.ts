import ICounter from "./ICounter";
import ILanguage from "./ILanguage";

interface IStore extends ILanguage, ICounter {
}

export default IStore;
