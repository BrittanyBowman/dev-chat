import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import post from "./ducks/post";

export default createStore( post, undefined, applyMiddleware( promiseMiddleware() ) );
