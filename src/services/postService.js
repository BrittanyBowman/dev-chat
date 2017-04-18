import axios from "axios";

import store from "../store";
import { createPost, setPosts } from "../ducks/post";

const BASE_URL = "http://localhost:8080/api/";

export function getPosts() {
	const postsPromise = axios.get( BASE_URL + "posts" ).then( response => response.data );

	store.dispatch( setPosts( postsPromise ) );
}

export function createNewPost( author, content ) {
	const postPromise = axios.post( "http://localhost:8080/api/posts", { author, content } )
		.then( ( response ) =>{
			getPosts();

			return response.data;
		} );
	store.dispatch( createPost( postPromise ) );
}
