const PENDING = "_PENDING";
const FULFILLED = "_FULFILLED";
const REJECTED = "_REJECTED";

const SET_POSTS = "SET_POSTS";

const initialState = {
	  errorFetchingPosts: false
	, loadingPosts: false
	, posts: []
};

export default function post( state = initialState, action ) {
	switch ( action.type ) {
		case SET_POSTS + PENDING:
			return Object.assign( {}, state, {
				  errorFetchingPosts: false
				, loadingPosts: true
			} );
		case SET_POSTS + FULFILLED:
			return Object.assign( {}, state, {
				  errorFetchingPosts: false
				, loadingPosts: false
				, posts: action.payload
			} );
		case SET_POSTS + REJECTED:
			return Object.assign( {}, state, {
				  errorLoadingPosts: true
				, loadingPosts: false
			} );
		default: return state;
	}
}

export function setPosts( postsPromise ) {
	return { payload: postsPromise, type: SET_POSTS };
}
