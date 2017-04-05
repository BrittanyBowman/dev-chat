const FULFILLED = "_FULFILLED";
const PENDING = "_PENDING";
const REJECTED = "_REJECTED";

const CREATE_POST = "CREATE_POST";
const SET_POSTS = "SET_POSTS";

const initialState = {
	  creatingPost: false
	, errorCreatingPost: false
	, errorLoadingPosts: false
	, loadingPosts: false
	, posts: []
};

export default function post( state = initialState, action ) {
	switch ( action.type ) {
		case CREATE_POST + PENDING:
			return Object.assign( {}, state, {
				  creatingPost: true
				, errorCreatingPost: false
			} );
		case CREATE_POST + FULFILLED:
			return Object.assign( {}, state, {
				  creatingPost: false
				, errorCreatingPost: false
				, posts: [ action.payload, ...state.posts ]
			} );
		case CREATE_POST + REJECTED:
			return Object.assign( {}, state, {
				  creatingPost: false
				, errorCreatingPost: true
			} );
		case SET_POSTS + PENDING:
			return Object.assign( {}, state, {
				  errorLoadingPosts: false
				, loadingPosts: true
			} );
		case SET_POSTS + FULFILLED:
			return Object.assign( {}, state, {
				  errorLoadingPosts: false
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

export function createPost( postPromise ) {
	return { payload: postPromise, type: CREATE_POST };
}

export function setPosts( postsPromise ) {
	return { payload: postsPromise, type: SET_POSTS };
}
