import axios from "axios";

import store from "../store";
import { setPosts } from "../ducks/post";

const BASE_URL = "http://localhost:8080/api/";

export function getPosts() {
	const postsPromise = axios.get( BASE_URL + "posts" ).then( response => response.data );

	store.dispatch( setPosts( postsPromise ) );
}
