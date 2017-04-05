import axios from "axios";

import store from "../store";
import { createPost, setPosts } from "../ducks/post";

export function getPosts() {
	const postsPromise = axios.get( "http://localhost:8080/api/posts" ).then( ( { data } ) => data );
	store.dispatch( setPosts( postsPromise ) );
}

export function createNewPost( name, text ) {
	const postPromise = axios.post( "http://localhost:8080/api/posts", { name, text } ).then( ( { data } ) =>{
		getPosts();

		return data;
	} );
	store.dispatch( createPost( postPromise ) );
}
