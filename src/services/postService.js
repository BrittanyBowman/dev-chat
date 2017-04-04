import axios from "axios";

import store from "../store";
import { setPosts } from "../ducks/post";

export function getPosts() {
	const foo = new Promise( resolve => setTimeout( () => resolve(), 1000 ) );
	store.dispatch( setPosts( foo ) );
}
