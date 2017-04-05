const SET_POSTS = "SET_POSTS";

const initialState = {
	  error: false
	, loadingPosts: false
	, posts: []
};

export default function post( state = initialState, action ) {
	switch ( action.type ) {
		case SET_POSTS + "_PENDING":
			return {
				  error: false
				, loadingPosts: true
				, posts: state.posts
			};
		case SET_POSTS + "_FULFILLED":
			return {
				  error: false
				, loadingPosts: false
				, posts: action.payload
			};
		case SET_POSTS + "_REJECTED":
			return {
				  error: true
				, loadingPosts: false
				, posts: state.posts
			};
		default: return state;
	}
}

export function setPosts( postsPromise ) {
	return { payload: postsPromise, type: SET_POSTS };
}
