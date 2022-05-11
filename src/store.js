import { createStore } from 'redux';
import changeValue from "./reducers/markNode";

const store = createStore(changeValue);

export default store;

